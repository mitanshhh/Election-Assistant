import express from 'express';
import { getTree } from './services/sheets.js';
import { getIneligibilityReason } from './services/groq.js';

const router = express.Router();

// GET /api/tree - Returns decision tree from Google Sheets
router.get('/tree', async (req, res) => {
  try {
    const tree = await getTree();
    res.json({ success: true, data: tree });
  } catch (error: any) {
    console.error('Error fetching tree:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to fetch decision tree' 
    });
  }
});

// POST /api/groq-reason - Returns AI generated reason for ineligibility
router.post('/groq-reason', async (req, res) => {
  try {
    const { answers } = req.body;
    if (!answers) {
      return res.status(400).json({ success: false, error: 'Answers are required' });
    }
    const reason = await getIneligibilityReason(answers);
    res.json({ success: true, data: reason });
  } catch (error: any) {
    console.error('Error fetching Groq reason:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to fetch reason' 
    });
  }
});

export default router;
