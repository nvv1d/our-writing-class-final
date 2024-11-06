// pages/api/submitAssignment.js
import axios from 'axios';

export const config = {
  api: {
    bodyParser: true,
  },
};

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Update with the specific origin if needed
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { message } = req.body;

  if (!message || message.trim() === '') {
    res.status(400).json({ error: 'Message cannot be empty' });
    return;
  }

  const botToken = '7815257977:AAFAMpcCTnr7F-b5-Jy_LKpVegTPIIOUW8k';
  const chatId = '-1002202270365';

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
}

export default allowCors(handler);
