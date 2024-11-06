// api/submit.js
import axios from 'axios';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    console.log('Attempting to send message:', text);

    const botToken = '7815257977:AAFAMpcCTnr7F-b5-Jy_LKpVegTPIIOUW8k';
    const chatId = '-1002202270365';

    const telegramResponse = await axios.post(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      }
    );

    console.log('Telegram API response:', telegramResponse.data);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      data: telegramResponse.data
    });
  } catch (error) {
    console.error('Detailed error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to submit',
      error: error.response?.data || error.message
    });
  }
}
