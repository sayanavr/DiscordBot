const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "!";

client.login(config.BOT_TOKEN);

client.on("message", function(message) {
    if (message.author.bot) return;
    // if (!message.content.startsWith(prefix)) return;

    // const commandBody = message.content.slice(prefix.length);
    // const args = commandBody.split(' ');
    // const command = args.shift().toLowerCase();
    // if (command === "ping") {
    //     const timeTaken = Date.now() - message.createdTimestamp;
    //     message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    // } else if (command === "sum") {
    //     const numArgs = args.map(x => parseFloat(x));
    //     const sum = numArgs.reduce((counter, x) => counter += x);
    //     message.reply(`The sum of all the arguments you provided is ${sum}!`);
    // }
    console.log(message);
    if (new RegExp(/(https?\:\/\/)?([^\.\s]+)?[^\.\s]+\.[^\s]+/gi).test(message)) {
        // var urlRE = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(message);
        // message.reply("url inside " + urlRE);
        var match = String(message).match(/(https?\:\/\/)?([^\.\s]+)?[^\.\s]+\.[^\s]+/gi);
        console.log(match);
        for (var i = 0; i < match.length; i++) {
            console.log(match[i]);
            if (new RegExp("(https://www.linkedin.com/in/.*)").test(match[i])) {
                console.log('linked in profile ' + match[i].split('/')[3] + "/" + match[i].split('/')[4]);
            } else if (new RegExp("(https://www.facebook.com/profile.php?.*)").test(match[i])) {
                console.log('facebook profile ' + match[i].split('=')[1]);
            } else if (new RegExp("(https://github.com/[^/]+$)").test(match[i])) {
                console.log('github profile ' + match[i].split('/')[3]);
            } else if (new RegExp("(https://www.instagram.com/[^/]+/$)").test(match[i])) {
                console.log('instagram profile ' + match[i].split('/')[3]);
            } else if (new RegExp("(https://twitter.com/[^/]+$)").test(match[i])) {
                console.log('twitter profile ' + match[i].split('/')[3]);
            }


        }
        message.reply(match + 'Message from-' + message.member.user.tag.split('#')[0]);
    }
});