// Serverless API for Vercel — sends email via Mailgun HTTP API
// Uses CommonJS to avoid requiring package.json "type": "module" changes.
const axios = require('axios');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { text } = req.body || {};
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ ok: false, error: 'Empty text' });
  }

  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN; // e.g. sandbox...mailgun.org
  const FROM_EMAIL = process.env.FROM_EMAIL || `Mailgun Sandbox <postmaster@${MAILGUN_DOMAIN}>`;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'yp9735192324@gmail.com';

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    console.error('Mailgun config missing');
    return res.status(500).json({ ok: false, error: 'Mailgun not configured' });
  }

  try {
    const params = new URLSearchParams();
    params.append('from', FROM_EMAIL);
    params.append('to', RECIPIENT_EMAIL);
    params.append('subject', 'New Valentine Response');
    params.append('text', `${new Date().toISOString()}\n\n${text}`);

    const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;
    const response = await axios.post(url, params.toString(), {
      auth: { username: 'api', password: MAILGUN_API_KEY },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: 10000,
    });

    console.log('Mailgun response:', response.data);
    return res.json({ ok: true, success: true, data: response.data });
  } catch (err) {
    console.error('Mailgun send error:', err);
    if (err.response && err.response.data) console.error('Mailgun error body:', err.response.data);
    return res.status(500).json({ ok: false, success: false, error: err.message || 'send failed', details: err.response && err.response.data });
  }
};
