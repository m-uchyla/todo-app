import app from './app';
import { migrate } from './db/config';

const port = process.env.PORT || 3001;

// Run migration and insert dummy data
migrate().then(() => {
  console.log('Migration complete');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
