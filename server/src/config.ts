export const config = {
  port: parseInt(process.env.PORT || '8080'),
  env: process.env.NODE_ENV || 'development',
  googleSheetsId: process.env.GOOGLE_SHEETS_ID,
  googleServiceAccountJson: process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
};

// Validate required env vars
if (!config.googleSheetsId) {
  console.warn('⚠️  GOOGLE_SHEETS_ID not set. Will use example data.');
}
