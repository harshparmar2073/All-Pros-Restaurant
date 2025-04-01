import mongoose from 'mongoose';
import Application from '../models/ApplicationModel.js';
import Job from '../models/JobModel.js';

export const getDashboardData = async (req, res) => {
  try {
    // Retrieve the user/restaurant ID from authentication (req.user) or query parameters
    const userId = req.user ? req.user._id : req.query.userId;
    if (!userId) {
      return res.status(400).json({ message: 'User/Restaurant ID is required for dashboard data' });
    }

    // Validate that userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user id format' });
    }

    // Convert userId to an ObjectId for querying
    const objectUserId = new mongoose.Types.ObjectId(userId);

    // Count various Application stats
    const totalApplications = await Application.countDocuments({ userId: objectUserId });
    const onHold = await Application.countDocuments({ userId: objectUserId, status: 'onHold' });
    const shortlisted = await Application.countDocuments({ userId: objectUserId, status: 'shortlisted' });
    const interviewed = await Application.countDocuments({ userId: objectUserId, status: 'interviewed' });
    const futureRef = await Application.countDocuments({ userId: objectUserId, status: 'further reference' });

    // Count Job vacancies
    const vacancies = await Job.countDocuments({ userId: objectUserId });

    // Aggregate job vacancy data: group jobs by title and count them
    const jobVacancyAgg = await Job.aggregate([
      { $match: { userId: objectUserId } },
      { $group: { _id: '$title', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    let jobVacancy = jobVacancyAgg.map((item) => ({
      title: item._id,
      count: item.count,
    }));

    // Fallback default options if no job data exists
    if (jobVacancy.length === 0) {
      jobVacancy = [
        { title: 'Waiter/Waitress', count: 0 },
        { title: 'Bartender', count: 0 },
        { title: 'Barista', count: 0 },
        { title: 'Sommeller', count: 0 },
        { title: 'Cashier', count: 0 },
        { title: 'Maitre D'  , count: 0 },
        { title: 'Executive Chef', count: 0 },
        { title: 'Sous Chef', count: 0 },
        { title: 'Line Cook', count: 0 },
        { title: 'Prep Cook', count: 0 },
        { title: ' Pastry Chef', count: 0 },
      ];
    }

    // Aggregate top referrers data from Applications (assuming a "referrer" field exists)
    const topRefAgg = await Application.aggregate([
      { $match: { userId: objectUserId } },
      { $group: { _id: '$referrer', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    let topReferrers = topRefAgg.map((item) => ({
      label: item._id || 'Direct',
      count: item.count,
    }));

    // Fallback default referrers if no data exists
    if (topReferrers.length === 0) {
      topReferrers = [
        { label: 'Direct', count: 0 },
        { label: 'Google', count: 0 },
        { label: 'LinkedIn Post', count: 0 },
        { label: 'Facebook Campaign', count: 0 },
        { label: 'Mail Campaign', count: 0 },
        { label: 'Jobs.lever.co.uk', count: 0 },       
      ];
    }

    // Assemble final response data
    const data = {
      stats: {
        applications: totalApplications,
        onHold,
        shortlisted,
        interviewed,
        futureRef,
        vacancies,
      },
      jobVacancy,
      topReferrers,
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return res.status(500).json({ message: 'Server error fetching dashboard data', error: error.message });
  }
};
