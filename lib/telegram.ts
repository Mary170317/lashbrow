export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "PASTE_YOUR_BOT_TOKEN";
export const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "PASTE_YOUR_CHAT_ID";

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  address: string;
  comment?: string;
}

export async function sendBookingToTelegram(data: BookingData): Promise<boolean> {
  try {
    const message = `
🌸 *НОВАЯ ЗАЯВКА* 🌸

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
💅 *Услуга:* ${data.service}
📅 *Дата и время:* ${data.date}
📍 *Адрес:* ${data.address}
💬 *Комментарий:* ${data.comment || "Нет"}

⏰ *Время заявки:* ${new Date().toLocaleString("ru-RU")}
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      console.error("Telegram API error:", await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
}
