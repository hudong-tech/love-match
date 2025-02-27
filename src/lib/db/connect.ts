import mongoose, { Connection } from 'mongoose'
import { MongooseCache } from './types'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null }

if (!global.mongoose) {
  global.mongoose = cached
}

async function dbConnect(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    }

    cached.promise = mongoose.connect(MONGODB_URI as string, opts)
      .then(mongoose => mongoose.connection)
      .catch((error) => {
        console.error('MongoDB connection error:', error)
        cached.promise = null
        throw error
      })
  }
  
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect 