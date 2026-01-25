const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Simple /api/save implementation that uses Resend (requires RESEND_API_KEY env var)
app.post('/api/save', async (req, res) => {
  const { text } = req.body || {};
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ success: false, error: 'Empty text' });
  }
  try {
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Valentine <no-reply@${req.hostname || 'example.com'}>` ,
      to: [process.env.RECIPIENT_EMAIL || 'yashppatel01@gmail.com'],
      subject: 'New Valentine Response',
      text: `${new Date().toISOString()}\n\n${text}`,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Error sending email via Resend:', err);
    return res.status(500).json({ success: false, error: err.message || 'send failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Local server running at http://localhost:${PORT}`));
