import {CronJob} from "cron";
import telebot from "../workers/TeleBotConnector";
import _ = require("lodash");

let chats: Map<string,string> = new Map();

export function runNightWorker() {
    console.log('starting Night Worker CRON');
    let morningJob = new CronJob('00 00 09 * * 1-7', resetDay, null, true)
}

let sleepingUsers : Map<string,string> = new Map();
/**
 * adds the user to the list of sleeping users and generates a response to the users based on if there is still someone awake
 * @param username
 * @param total
 * @returns {any}
 */
export function addNightUser(username: string, total: number): string {
    sleepingUsers[username] = 'asleep';
    let asleepCount = _.keys(sleepingUsers).length;
    if (asleepCount == total) {
        performGoodNight();
        return "good night everyone";
    }
    else {
        return total - asleepCount + " users still awake."
    }
}


function performGoodNight() {
    //turn off lights

    //tell NAS to go to sleep
            //ssh send shutdown to NAS
    //turn off network
            //ssh send shutdown to router

    //turn itself off
}

function resetDailyCron() {

}

function resetDay() {
    sleepingUsers.clear();
    chats.forEach((chat)=>{
        telebot.sendMessage(chat, "Good morning everyone!!");
    });
}