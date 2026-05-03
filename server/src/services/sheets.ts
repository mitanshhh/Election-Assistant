import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TreeData, DecisionNode, Answer } from '../types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface SheetRow {
  [key: number]: string;
}

function parseSheets(rows: any[]): TreeData {
  if (!rows || rows.length === 0) {
    throw new Error('No data in Google Sheet');
  }

  // Schema: id(0) | question(1) | help_text(2) | answer_1(3) | answer_2(4) | answer_3(5) | next_1(6) | next_2(7) | next_3(8)
  const nodes: DecisionNode[] = rows.slice(1).map((row: SheetRow) => {
    const answers: Answer[] = [];

    // Answer 1
    if (row[3] && row[3] !== '-') {
      answers.push({
        label: row[3],
        nextNode: row[6] || 'end',
      });
    }
    // Answer 2
    if (row[4] && row[4] !== '-') {
      answers.push({
        label: row[4],
        nextNode: row[7] || 'end',
      });
    }
    // Answer 3
    if (row[5] && row[5] !== '-') {
      answers.push({
        label: row[5],
        nextNode: row[8] || 'end',
      });
    }

    return {
      id: row[0] || '',
      question: row[1] || '',
      helpText: row[2] || undefined,
      answers,
    };
  });

  return {
    nodes,
    startNode: nodes[0]?.id || 'start',
  };
}

let cachedTree: TreeData | null = null;
let cacheTime = 0;

export async function getTree(): Promise<TreeData> {
  // Return cached tree for 5 minutes
  const now = Date.now();
  if (cachedTree && (now - cacheTime) < 5 * 60 * 1000) {
    return cachedTree;
  }

  try {
    const sheets = google.sheets('v4');

    // Get service account key path
    const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_JSON || 
      path.join(__dirname, '../../../service-account-key.json');

    if (!fs.existsSync(keyPath)) {
      throw new Error(`Service account key not found at ${keyPath}`);
    }

    const serviceAccountKey = JSON.parse(fs.readFileSync(keyPath, 'utf-8'));

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheetsApi = sheets as any;
    const response = await sheetsApi.spreadsheets.values.get({
      auth,
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'tree!A:I',
    });

    const rows = response.data.values || [];
    const tree = parseSheets(rows);
    
    cachedTree = tree;
    cacheTime = now;
    
    return tree;
  } catch (error: any) {
    console.error('Sheets API error:', error.message);
    throw new Error(`Failed to fetch Google Sheet: ${error.message}`);
  }
}
