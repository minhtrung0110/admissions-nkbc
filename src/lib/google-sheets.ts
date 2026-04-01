import { google } from 'googleapis';

export async function appendToGoogleSheet(data: any[]) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Default sheet ID from environment variable
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      console.warn("GOOGLE_SHEET_ID is missing");
      return false;
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:Z', // Modify according to actual sheet name
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [data],
      },
    });

    return true;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    // Even if Spreadsheet fails, we might still want to return a specific state
    // For now we throw so action can catch
    throw error;
  }
}
