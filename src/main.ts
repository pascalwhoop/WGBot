
import telebot from "./workers/TeleBotConnector";
import {runNightWorker, addNightUser} from "./helpers/NightWorker";

runNightWorker();

telebot.on('message', msg => console.log(msg));
//telebot.on('channel_post', msg => console.log(msg));

telebot.onText(/\/night/, (msg, match) =>{
    telebot.getChatMembersCount(msg.chat.id)
        .then(count =>{
            telebot.sendMessage(msg.chat.id, addNightUser(msg.from.username, count-1))
        })
});

telebot.onText(/\/help/, (msg, match) =>{
    let res = "This is what I can do:\n";
    res += "/night --- lets me know you go to bed\n";
    res += "/help  --- shows you this\n";
    telebot.sendMessage(msg.chat.id, res);
    //telebot.sendMessage()
});



//slack bot
// give the bot something to listen for.


