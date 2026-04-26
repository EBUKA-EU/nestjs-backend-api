/**
 * Migration: add-role-to-users
 *
 * Backfills the `role` field on all existing user documents that do not yet
 * have one, setting it to the default value of "user".
 *
 * Usage:
 *   pnpm run migrate:roles
 *
 * The script reads DATABASE_URL from your .env file, connects to MongoDB,
 * performs the update, then cleanly disconnects.
 */

import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function migrate() {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    console.error('ERROR: DATABASE_URL is not set in your .env file.');
    process.exit(1);
  }

  console.log('Connecting to MongoDB...');
  await mongoose.connect(uri);
  console.log('Connected.');

  // Use the raw collection so we don't need the full Mongoose model here
  const db = mongoose.connection.db;
  if (!db) {
    throw new Error('Database connection not established');
  }
  const usersCollection = db.collection('users');

  // Update only documents that are missing the role field
  const result = await usersCollection.updateMany(
    { role: { $exists: false } },
    { $set: { role: 'user' } },
  );

  console.log(
    `Migration complete: ${result.modifiedCount} user document(s) updated with role = "user".`,
  );

  await mongoose.disconnect();
  console.log('Disconnected. Done.');
}

migrate().catch((err: unknown) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
