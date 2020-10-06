const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////

client.on("guildCreate", (guild) => {
       let channel = client.channels.get(guild.channels.filter(c => c.permissionsFor(client.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0])    
       channel.send(`**قنــاتنا علـى اليوتيوب https://www.youtube.com/channel/UC_MsQabWHZKBXh4TvZenyTw**`)
});




///bot حاله

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  }

  });




const prefix = "."
const developers = ""



///كود الهيلب

      client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setTitle('تــم أرسال فـي الخــاص')
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('ســيرفرنا حيــاك الله')
         .setURL('https://discord.gg/HQ3hu3p')
         .setDescription(`
         \`\`\`Main Commands  :\`\`\`         
         
         - ${prefix}بوت : بوت
         
         - ${prefix}صورتي : صورتي
		 
         - ${prefix}صورة السيرفر : لاظهار صوره السيرفر
         
         - ${prefix}اظهار جميع البوتات : لاظهار جميع البوتات في السيرفر
         
         - ${prefix}يوزر : لاظهار معلومات حسابك
         
         - ${prefix}سيرفر : لاظهار معلومات السيرفر

         - ${prefix}بينج : لمعرفه سرعه اتصال البوت

         - ${prefix}رولات : لاظهار جميع رولات السيرفر

         \`\`\`Admin Commands :\`\`\` 
         
         \`Text Commands : \`
         
         - ${prefix}بان : لتبنيد شخص
         
         - ${prefix}كيك : لطرد شخص
         
         - ${prefix}1bc : برودكاست رساله الى أعضاء السيرفر
         
         - ${prefix}اخرص : أسكات
         
         - ${prefix}اتكلم : تكلم
         
         - ${prefix}اقفل : قفل الشات
         
         - ${prefix}افتح : لفتح الشات

         - ${prefix}اخفي الشات : لاخفاء الشات
         
         - ${prefix}اظهر الشات : لاظهار الشات
         
         - ${prefix}رول : اعظاء رتبه لشخص
         
         - ${prefix}رول جميع : اعطاء رتبه للكل
         
         - ${prefix}رول ل : اعطاء رتبه لشخص
         
         - ${prefix}رول بوت : اعطاء رتبه لبوت
         
         - ${prefix}قول : البوت يكرر كلامك
         
         - ${prefix}ايم باد : كلام بامبد جميل
         
         \`Voice Commands : \`
         
        - ${prefix}سحب الكل : سحب الجميع الى رومك الصوتي

         \`\`\`Credits Commands  :\`\`\`  

        - ${prefix}رصيدي : لمعرفه رصيدك

        - ${prefix}هديتي : لسحب جائزه يوميه

         لتحويل رصيد الى شخص
        - ${prefix}رصيدي <المبلغ> <منشن للشخص> 




**رابط شرح كيفيه عمل البوت على قناتي في اليوتيوب**
https://www.youtube.com/channel/UC_MsQabWHZKBXh4TvZenyTw

         
`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('**افتح الخاص ي كسمك**'))
   
   }
   });
  

///أوامر عامة

///ping
client.on('message', message => {   
  if (message.content === prefix + "ping") {
   const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.addField(':chart_with_upwards_trend:  **سرعة أتصال الــبوت** ' , `${Date.now() - message.createdTimestamp}` + ' ms`')


message.channel.sendEmbed(embed);
 }
});

///avatar savatar
client.on("message",message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "avatar")){
  const mention = message.mentions.users.first()
  
  if(!mention) return console.log("") 
  let embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
  .setTitle("Avatar Link")
  .setURL(`${mention.avatarURL}`)
  .setImage(`${mention.avatarURL}`)
  .setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
      message.channel.send(embed)
  }
  })
  
  client.on("message", message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "savatar")) {
      let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
      message.channel.send(doma)
    } else if(message.content.startsWith(prefix + "avatar")) {
      let args = message.content.split(" ")[1]
  var avt = args || message.author.id;    
      client.fetchUser(avt).then(user => {
       avt = user;
    let embed = new Discord.RichEmbed() 
    .setColor("BLACK")
    .setAuthor(`${avt.tag}`, avt.avatarURL)
    .setTitle("Avatar Link")
    .setURL(avt.avatarURL)
    .setImage(avt.avatarURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed) 
      })
    }
  });

  ///bot info
  
client.on('message', message => {
  if (message.content.startsWith( prefix + "bot")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``Info The Bot`` ')
     .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('``servers``', [client.guilds.size], true)
     .addField('``channels``' , `[ ${client.channels.size} ]` , true)
     .addField('``Users``' ,`[ ${client.users.size} ]` , true)
     .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
     .addField('``My ID``' , `[ ${client.user.id} ]` , true)
           .addField('``My Prefix``' , `[ $ ]` , true)
           .addField('``My Language``' , `[ JavaScript ]` , true)
           .addField('``Bot Version``' , `[ v0.1 ]` , true)
           .setFooter('By | <@Your Id>')
  })
  }
  });


///server

client.on('message', function(msg) {

  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`,true)
    .addField(':id: **Server ID:**',`${msg.guild.id}`,true)
    .addField('📅** Created On**',msg.guild.createdAt.toLocaleString())
    .addField('👑** Owned By**',`${msg.guild.owner}`,true)
    .addField(':busts_in_silhouette:  **Members **' + `[ ${msg.guild.memberCount} ]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}**` + ' Online')
    .addField(':speech_balloon: Channels ' + `[ ${msg.guild.channels.size} ]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}**` + ' Text | ' + `**${msg.guild.channels.filter(m => m.type === 'voice').size}**` + ' Voice')//tt
    .addField(':earth_africa: Others','**Region: **' + `${msg.guild.region}` + ' **Verification Level:** ' + `${msg.guild.verificationLevel}`)
    .addField(':closed_lock_with_key:** Rules **' + `[ ${msg.guild.roles.size} ]`,'To see a list with all roles use **$roles**');
    msg.channel.send({embed:embed});
  }
});


///user
client.on("message", pixelbot => {

  if (pixelbot.content.startsWith(prefix + "user")) {

    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {

      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() 
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | User Info") 
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) 
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); 

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); 
    });
  }
}); 


///allbots
client.on('message', alphamsg => {
  if(alphamsg.content === prefix + "allbots") { 
  if(!alphamsg.channel.guild) return;
let alphaf = 1;
const alpha = alphamsg.guild.members.filter(m=>m.user.bot).map(m=>`:small_orange_diamond: ${alphaf++} - <@${m.id}>`);
          alphamsg.channel.send(`**وجدت ${alphamsg.guild.members.filter(m=>m.user.bot).size} بوت
البوتات الموجوده في السيرفر

${alpha.join('n')}
**
`)
}
});

///roles

client.on('message', message => {
  if (message.content.startsWith(prefix + 'roles')) {

      const Rank = message.guild.roles.map(e => e.toString()).join(" ");

      const RankList = new Discord.RichEmbed()
          .setTitle('➠ Roles.')
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .setDescription(Rank)
          .setFooter(message.guild.name)
      message.channel.send(RankList)
  }
});

////اوامر ادارية

///kick

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!reason) return message.reply("**اكتب سبب الطرد**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("ما تقدر تطرد شخص رتبته اعلى منك!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});


///ban
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

///show hide
client.on('message', message => {
        if(message.content === prefix + "hide") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('**تـم أخفـاء الشـات**')
   }
  });
  
  
  client.on('message', message => {
        if(message.content === prefix + "show") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('**تـم أظهـار الشـات**')
   }
  });

/// lock unlock
client.on('message', message => {

  if(message.content === `${prefix}lock`) {
                      if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("** ✅ | تـم قفـل الشـات  **")
         });
           }

if(message.content === `${prefix}unlock`) {
                   if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**✅ | تـم فتـح الشـات **")
         });
           }
           
    
  
});

///mute unmute

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد رتبة الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم ميوت:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم اعطاء العضو ميوت**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**")
            .catch(console.error);
        });
    }
  }
  
  
});



client.on("message", message => {
  if(!message.channel.guild) return;  
   if (message.author.bot) return;
  
   let command = message.content.split(" ")[0];
  
   if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
         if (!message.member.hasPermission('MANAGE_ROLES')) return;
   let user = message.mentions.users.first();
   let modlog = client.channels.find('name', 'log');
   let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
   if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
   if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
  
   if (message.guild.member(user).removeRole(muteRole.id)) {
       return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
   } else {
     message.guild.member(user).removeRole(muteRole).then(() => {
       return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
     });
   }
  
 };
  
 });

//clear
client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": عدد الرسائل التي تم مسحها" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": عدد الرسائل التي تم مسحها" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

//say embad

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("للأسف لا تمتلك صلاحية ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("للأسف لا تمتلك صلاحية MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});

//role

client.on("message", message => {
  let roleembed = new Discord.RichEmbed()
.setDescription(`
أمثله على الأوامر :
-role @mention rolename : لأعطاء رتبة لعضو معين
-role all rolename : لأعطاء رتبة للجميع
-role humans rolename : لأعطاء رتبة للاشخاص فقط
-role bots rolename : لأعطاء رتبة لجميع البوتات`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
var args = message.content.split(' ').slice(1);
var msg = message.content.toLowerCase();
if( !message.guild ) return;
if( !msg.startsWith( prefix + 'role' ) ) return;
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
    if( !args[0] ) return message.channel.sendEmbed(roleembed)
    if( !args[1] ) return message.channel.sendEmbed(roleembed)
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى الكل رتبة**');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البوتات رتبة**');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البشريين رتبة**');
    }  
} else {
    if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
    if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
    }
}
});



// ------------ = [Voice Commands] = ------------

 client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });




/////كود كريدت
  
const cool = [];

client.on('message',async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




client.login(process.env.token);
