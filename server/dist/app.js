import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
// Serve static frontend files - correct path
const frontendPath = path.join(__dirname, '../../../frontend/dist');
app.use(express.static(frontendPath));
app.use('/api', routes);
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
// SPA fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
    });
});
export default app;
//# sourceMappingURL=app.js.map