const { Scenes, session, Telegraf, Markup} = require('telegraf');
module.exports = {Markup}
require('dotenv').config()
const { inlinekb } = require('./additions/markups');
const { collection, ObjectId } = require('./additions/db');
const bot = new Telegraf(process.env.BOT_TOKEN);
const { enter, leave } = Scenes.Stage;

const scene = new Scenes.BaseScene("scene");

scene.enter(async ctx => {
    try {
        await ctx.reply('Scene:')
    } catch (e) {
        console.error(e);
    }
})

scene.on('text', async ctx => {
    try {
        await ctx.scene.leave('scene')
    } catch (e) {
        console.error(e);
    }
})

const stage = new Scenes.Stage([scene]);  
bot.use(session());
bot.use(stage.middleware());  

bot.start(async ctx => {
    try {
        
    } catch (e) {
       console.error(e); 
    }
});

bot.help(async ctx => {
    try {
        
    } catch (e) {
       console.error(e); 
    }
});

bot.action('callback', async ctx => {
    try {
        await ctx.answerCbQuery()
    } catch (e) {
       console.error(e); 
    }
})


bot.launch({dropPendingUpdates: true});
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));