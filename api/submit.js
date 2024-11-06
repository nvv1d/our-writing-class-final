// api/submit.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { text } = req.body;
    const botToken = '7815257977:AAFAMpcCTnr7F-b5-Jy_LKpVegTPIIOUW8k';
    const chatId = '-1002202270365';

    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to submit' });
  }
}
