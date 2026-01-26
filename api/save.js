// Serverless API for Vercel — uses RESEND_API_KEY and RECIPIENT_EMAIL environment variables
// Uses CommonJS to avoid requiring package.json "type": "module" changes.
const { Resend } = require('resend');

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.warn('Warning: RESEND_API_KEY not set — email sending will fail until configured');
}

const resend = new Resend(RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { text } = req.body || {};
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ ok: false, error: 'Empty text' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ ok: false, error: 'RESEND_API_KEY not configured' });
  }

  try {
    await resend.emails.send({
      from: `Valentine <no-reply@${process.env.VERCEL_URL || 'example.com'}>`,
      to: [process.env.RECIPIENT_EMAIL || 'yashppatel01@gmail.com'],
      subject: 'New Valentine Response',
      text: `${new Date().toISOString()}\n\n${text}`,
    });

    return res.json({ ok: true, success: true });
  } catch (err) {
    console.error('Resend send error:', err);
    return res.status(500).json({ ok: false, success: false, error: err.message || 'send failed' });
  }
};
