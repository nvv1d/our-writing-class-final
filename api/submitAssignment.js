import axios from 'axios';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { message } = req.body;

  if (!message || message.trim() === '') {
    res.status(400).json({ error: 'Message cannot be empty' });
    return;
  }

  // Replace these with your actual token and chat ID
  const botToken = '7815257977:AAFAMpcCTnr7F-b5-Jy_LKpVegTPIIOUW8k';
  const chatId = '-1002202270365';

  try {
    // Send message to Telegram
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
};
