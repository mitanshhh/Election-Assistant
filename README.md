# Election Assistant

An interactive voting guide that helps users understand the election process.

## Features
- 🎯 Interactive decision tree with beautiful animations
- 📱 Mobile-responsive design
- 🔄 Progress tracking
- ☁️ Serverless deployment on Cloud Run
- 🚀 Auto-deploy with GitHub Actions
- 📊 Data stored in Google Sheets

## Tech Stack
- React 18 + TypeScript
- Express.js + TypeScript
- Tailwind CSS + Framer Motion
- Google Sheets API
- Cloud Run

## Quick Start

### 1. Create Google Sheet
- Go to Google Sheets
- Create new sheet named `tree`
- Add columns: id, question, help_text, answer_1, answer_1_help, answer_2, answer_2_help, next_1, next_2
- Add rows (see GOOGLE_SHEET_EXAMPLE below)
- Share with your service account email
- Copy Sheet ID from URL

### 2. Setup GCP

```bash
gcloud projects create election-assistant-2024
gcloud config set project election-assistant-2024
gcloud services enable sheets.googleapis.com run.googleapis.com container.googleapis.com

gcloud iam service-accounts create election-app
gcloud projects add-iam-policy-binding election-assistant-2024 \
  --member=serviceAccount:election-app@election-assistant-2024.iam.gserviceaccount.com \
  --role=roles/editor

gcloud iam service-accounts keys create service-account-key.json \
  --iam-account=election-app@election-assistant-2024.iam.gserviceaccount.com
```

### 3. Setup GitHub Secrets

Add these to your GitHub repo (Settings → Secrets):
- `GCP_PROJECT_ID`: election-assistant-2024
- `GCP_SA_KEY`: (contents of service-account-key.json)
- `GOOGLE_SHEETS_ID`: your-sheet-id

### 4. Deploy

```bash
git push origin main
```

GitHub Actions will automatically deploy to Cloud Run!

## Local Development

```bash
npm install -D concurrently

# Terminal 1: Backend
cd server && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

Visit `http://localhost:3000`

## Google Sheet Example

| id | question | help_text | answer_1 | answer_1_help | answer_2 | answer_2_help | next_1 | next_2 |
|----|----------|-----------|----------|----------------|----------|----------------|--------|--------|
| start | Are you a US citizen? | You must be a US citizen to vote | Yes | You meet this requirement | No | You may not be eligible | age | ineligible |
| age | Are you 18 or older? | Federal law requires voters to be 18+ | Yes | You meet this requirement | No | You cannot vote yet | registration | ineligible |
| registration | Are you registered? | Registration deadline is 2 weeks before election | Yes | Check your status | No | Register now | voting_method | register_guide |
| voting_method | How will you vote? | Choose your preferred method | In-person | Vote on election day | Mail | Vote by absentee ballot | summary | summary |
| register_guide | Visit your state election website | You can register online or in person | | | | | summary | |
| summary | You're ready to vote! | Here's your personalized guide | | | | | end | |
| ineligible | You may not be eligible | Learn more from your state election office | | | | | end | |
| end | Thank you! | Download your guide | | | | | | |
