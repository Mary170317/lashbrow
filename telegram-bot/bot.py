import asyncio
from aiogram import Bot

BOT_TOKEN = "8507432135:AAHUWu63c5UUshNGSG5d4CmVKbKNLCcKtjs"
ADMIN_ID = 8002327046

async def main():
    bot = Bot(token=BOT_TOKEN)
    await bot.send_message(ADMIN_ID, "🤖 Бот запущен и готов принимать заявки")
    print("Бот работает.")

asyncio.run(main())