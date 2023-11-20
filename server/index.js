import { app, connectDatabase } from './server.js';

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

startServer();