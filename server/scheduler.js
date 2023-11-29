import cron from 'node-cron';
import checkForCompletedAuctions from './auctionHandler.js';

// This schedules the script to run every minute
cron.schedule('* * * * *', async () => {
  console.log('Running the script...');
  await checkForCompletedAuctions();
});
