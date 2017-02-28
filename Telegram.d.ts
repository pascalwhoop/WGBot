declare module "Telegram" {

    export class TelegramMessage {
        message_id: number;
        text: string;
        from: TelegramUser;
        date: number;
        chat: TelegramChat;
        forward_from: TelegramUser;
        forward_from_chat: TelegramChat;
    }

    class TelegramChat{
        /**
         * Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
         */
        id: number;
        /**
         * Type of chat, can be either “private”, “group”, “supergroup” or “channel”
         */
        type: string;
        title: string;
        username: string;
        first_name: string;
        last_name: string;
        all_members_are_administrators: boolean;
    }

    class TelegramUser {
        /**
         * Unique identifier for this user or bot
         */
        id: number;
        first_name: string;	//User‘s or bot’s first name
        last_name: string;	//Optional. User‘s or bot’s last name
        username: string;	//Optional. User‘s or bot’s username
    }

    // interface Query {
    //     chat_id?: string;
    //     message_id?: string;
    //     inline_message_id?: string;
    // }


    export class Telegram extends EventEmitter {
        constructor(...args: any[]);

        answerCallbackQuery(...args: any[]): void;

        answerInlineQuery(...args: any[]): void;

        closeWebHook(...args: any[]): void;

        deleteWebHook(...args: any[]): void;

        downloadFile(...args: any[]): void;

        editMessageCaption(...args: any[]): void;

        editMessageReplyMarkup(...args: any[]): void;

        editMessageText(...args: any[]): void;

        forwardMessage(...args: any[]): void;

        getChat(...args: any[]): TelegramChat;

        getChatAdministrators(...args: any[]): void;

        getChatMember(...args: any[]): void;

        getChatMembersCount(chatID: string | number): Promise<any>;

        getFile(...args: any[]): void;

        getFileLink(...args: any[]): void;

        getGameHighScores(...args: any[]): void;

        getMe(...args: any[]): void;

        getUpdates(...args: any[]): Promise<any>;

        getUserProfilePhotos(...args: any[]): void;

        getWebHookInfo(...args: any[]): void;

        hasOpenWebHook(...args: any[]): void;

        initPolling(...args: any[]): void;

        isPolling(...args: any[]): void;

        kickChatMember(...args: any[]): void;

        leaveChat(...args: any[]): void;

        onReplyToMessage(...args: any[]): void;

        onText(regex: string | RegExp, cb: (msg: TelegramMessage, match: RegExpExecArray| null)=> void): void;

        on(event: "message", callback: (msg: any, match: string[]) => void);
        on(event: "text", callback: (msg: any, match: string[]) => void);
        on(event: "channel_post", callback: (msg: any, match: string[])=> void);
        // on(event: "text", callback: (msg: any, match: string[]) => void);
        // on(event: "text", callback: (msg: any, match: string[]) => void);
        // on(event: "text", callback: (msg: any, match: string[]) => void);
        // on(event: "text", callback: (msg: any, match: string[]) => void);
        // on(event: "text", callback: (msg: any, match: string[]) => void);
        // on(event: "text", callback: (msg: any, match: string[]) => void);

        openWebHook(...args: any[]): void;

        processUpdate(...args: any[]): void;

        sendAudio(...args: any[]): void;

        sendChatAction(...args: any[]): void;

        sendContact(...args: any[]): void;

        sendDocument(...args: any[]): void;

        sendGame(...args: any[]): void;

        sendLocation(...args: any[]): void;

        sendMessage(chat_id: number | string, text: string): Promise<any>;

        sendPhoto(...args: any[]): void;

        sendSticker(...args: any[]): void;

        sendVenue(...args: any[]): void;

        sendVideo(...args: any[]): void;

        sendVoice(...args: any[]): void;

        setGameScore(...args: any[]): void;

        setWebHook(...args: any[]): void;

        startPolling(...args: any[]): void;

        stopPolling(...args: any[]): void;

        unbanChatMember(...args: any[]): void;

        static messageTypes: string[];
        static prefixed: boolean;
    }

    class EventEmitter {
        constructor();

        addListener(event: any, fn: any, context: any): any;

        emit(event: any, a1: any, a2: any, a3: any, a4: any, a5: any, ...args: any[]): any;

        eventNames(): any;

        listeners(event: any, exists: any): any;

        off(event: any, fn: any, context: any, once: any): any;

        on(event: any, fn: any, context?: any): any;

        once(event: any, fn: any, context: any): any;

        removeAllListeners(event: any): any;

        removeListener(event: any, fn: any, context: any, once: any): any;

        setMaxListeners(): any;

        static EventEmitter: any;
        static prefixed: boolean;
    }


}