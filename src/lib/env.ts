/**
 * Environment configuration
 * Centralized place for all environment variables
 */

export const env = {
  // Base URL configuration
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  siteName: process.env.SITE_NAME || 'Ignitia',
  
  // Environment
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Optional: Add other environment variables as needed
  // databaseUrl: process.env.DATABASE_URL,
  // apiKey: process.env.API_KEY,
  // secretKey: process.env.SECRET_KEY,
} as const

export default env
