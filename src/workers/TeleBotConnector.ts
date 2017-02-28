import * as TelegramBot from 'node-telegram-bot-api';
import {TelegramMessage} from "Telegram";
import {Telegram} from "Telegram";





// replace the value below with the Telegram token you receive from @BotFather
let token = process.env.TELE_API_KEY;
if(!token) {
    console.log('API Key missing! Set TELE_API_KEY variable before starting node');
    process.exit(-1);
}

// Create a bot that uses 'polling' to fetch new updates
let telebot: Telegram = new TelegramBot(token, { polling: true });

//telebot.sendMessage('-182214792', "I am alive!");



export default telebot;