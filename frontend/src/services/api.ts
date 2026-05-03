import { TreeData } from '../types';

const API_BASE = import.meta.env.VITE_API_URL || '';

export async function fetchTree(): Promise<TreeData> {
  const response = await fetch(`${API_BASE}/api/tree`);
  if (!response.ok) {
    throw new Error('Failed to fetch decision tree');
  }
  const data = await response.json();
  return data.data;
}

export async function fetchGroqReason(answers: Record<string, string>): Promise<string> {
  const response = await fetch(`${API_BASE}/api/groq-reason`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch reason');
  }
  const data = await response.json();
  return data.data;
}
