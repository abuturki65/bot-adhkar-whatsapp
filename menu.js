const { decryptMedia } = require('@open-wa/wa-automate');

const adk = require('./adk.js');
const photo = require('./photo.js');
const videox = require('./video.js');
const txtt = require('./txtt.js');
const moment = require('moment');

module.exports = menu = async(client, message) => {

    try {
   const { id, from, sender, isMedia, isGroupMsg, mentionedJidList, mimetype, quotedMsg, chat, quotedMsgObj } = message
   let {body} = message
   const ownerNumber = ["966559298917@c.us"]; // ضع رقم صاحب البوت 
   const isOwner = ownerNumber.includes(sender.id)
   const botNumber = await client.getHostNumber()
   const groupId = isGroupMsg ? chat.groupMetadata.id : ''
   const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
   const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
   const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
   const { name } = chat
   const txt = body.toLowerCase()
   const txts = body.toLowerCase().split(' ')[0] || ''
   const arg2 = body.trim().split(/ +/).slice(1)
   const args = body.split(' ')
  

  
// ================== أوامر القروبات ================== // 

  
      if ((txt === "hi" || txt === "مرحبا") && isGroupMsg === true){
       
      await client.sendButtons(from, txtt.t4, [
        {
            id: "1",
            "text": "القرآن الكريم"
        },
    ], "BOT ADKHAR", moment().format('MMMM Do YYYY, h:mm:ss a'))
      }

      else if ((txt === "hi" || txt === "مرحبا") && isGroupMsg === false){
        await client.sendButtons(from, txtt.t3, [
          {
              id: "1",
              "text": "القرآن الكريم"
          },
      ], "BOT ADKHAR", moment().format('MMMM Do YYYY, h:mm:ss a'))
        }
    
       else if ((txt === "اذكار") || (txt === "ذكر") || (txt === "1")){
        let listadk = adk[Math.floor(Math.random() * adk.length)]
        client.reply(from, listadk, id)
        .then((result) => { console.log('Result: ', result); })
        .catch((error) => { console.error('Error when sending: ', error); });
       }
    
       else if ((txt === "صور") || (txt === "صور عشوائية") || (txt === "5")){
        let listphoto = photo[Math.floor(Math.random() * photo.length)]
        await client.sendFileFromUrl(from,listphoto, 'photo.jpeg', ' ­ ', id)
        .then((result) => { console.log('Result: ', result); })
        .catch((error) => { console.error('Error when sending: ', error); });
       }
    
       else if ((txt === "فيديو") || (txt == "6")){
        let listvideo = videox[Math.floor(Math.random() * videox.length)]
        await client.sendFileFromUrl(from,listvideo, 'video.mp4', ' ­ ', id)
        .then((result) => { console.log('Result: ', result); })
        .catch((error) => { console.error('Error when sending: ', error); });
       }
    
      else if ((txt === "اذكار المساء") || (txt === "أذكار المساء") || (txt === "4")){
        await client.reply(from, txtt.t1, id)
    }
    
      else if ((txt === "اذكار الصباح") || (txt === "أذكار الصباح") || (txt === "3")){
        await client.reply(from, txtt.t2, id)
    }
    
    else if ((txt === "سلام") || (txt === "السلام عليكم") || (txt === "السلام عليكم ورحمة الله") || (txt === "السلام عليكم ورحمة الله وبركاته") || (txt === "سلام عليكم")){
      await client.reply(from, "وعليكم السلام ورحمة الله وبركاته", id)
    }
  
    else if ((txt === "مؤسس القروب" || txt === "موؤسس القروب" || txt === "7") && isGroupMsg === true) {    
      const Owner_ = chat.groupMetadata.owner
      await client.sendTextWithMentions(from, `مؤسس القروب : @${Owner_}`)
  } 
  
    else if ((txt === "مشرف" || txt === "المشرفين" || txt === "8") && isGroupMsg === true) {    
      let mimin = ''
      for (let admon of groupAdmins) {
          mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
      }
      await client.sendTextWithMentions(from, mimin)
  }
  
    else if ((txts === "حذف" || txts === "9") && isGroupMsg === true) {
      if (!isGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذه الميزة إلا من قبل مشرفي القروب ⛔', id)
      if (!quotedMsg) return client.reply(from, 'رد على رسالة البوت بكلمة *حذف* الإزالتها', id)
      if (!quotedMsgObj.fromMe) return client.reply(from, ' لا يمكن للروبوت حذف محادثات المستخدمين الآخرين ⛔', id)
      client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
  } 
  
    else if ((txts === "خفض_رتبة" || txts === "خفض_رتبه" || txts === "10") && isGroupMsg === true) {
      if (!isGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذه الميزة إلا من قبل مشرفي القروب ⛔', id)
      if (!isBotGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذه الميزة إلا عندما يكون الروبوت مشرف 🤖', id)
      if (mentionedJidList.length === 0) return client.reply(from, 'لأستخدام هذه الميزة أرسل الأمر خفض_رتبة @تاق لصاحب الرقم', id)
      if (mentionedJidList.length >= 2) return client.reply(from, 'عذرًا ، لا يمكن تطبيق هذا الأمر إلا على مستخدم واحد.', id)
      if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'عذرا ، المستخدم هو بالفعل مشرف.', id)
      await client.demoteParticipant(groupId, mentionedJidList[0])
      await client.sendTextWithMentions(from, `تم خفض رتبة @${mentionedJidList[0]}.`)
  }
  
    else  if ((txts === "ترقيه" || txts === "ترقية" || txts === "11") && isGroupMsg === true) {
      if (!isGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذه الميزة إلا من قبل مشرفي القروب ⛔', id)
      if (!isBotGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذه الميزة إلا عندما يكون الروبوت مشرف 🤖', id)
      if (mentionedJidList.length === 0) return client.reply(from, 'لأستخدام هذه الميزة أرسل الأمر ترقية @تاق لصاحب الرقم', id)
      if (mentionedJidList.length >= 2) return client.reply(from, 'عذرًا ، لا يمكن تطبيق هذا الأمر إلا على مستخدم واحد', id)
      if (groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'عذرا ، المستخدم هو بالفعل مشرف.', id)
      await client.promoteParticipant(groupId, mentionedJidList[0])
      await client.sendTextWithMentions(from, `تم ترقية @${mentionedJidList[0]} الى مشرف.`)
      }
  
    else if ((txts === "طرد" || txts === "12") && isGroupMsg === true) {
      if (!isGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا من قبل مشرفي القروب ⛔', id)
      if (!isBotGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا عندما يكون الروبوت مشرف 🤖', id)
      if (mentionedJidList.length === 0) return client.reply(from, 'لأستخدام هذه الميزة أرسل الأمر *طرد* @تاق لرقم', id)
      await client.sendText(from, `تم تلقي الأمر \n${mentionedJidList.join('\n')}`)
      for (let i = 0; i < mentionedJidList.length; i++) {
          if (groupAdmins.includes(mentionedJidList[i])) return client.reply(from, "لا يستطيع البوت طرد مشرفين القروب ⛔", id)
          await client.removeParticipant(groupId, mentionedJidList[i])
      }
    }
  
    else if ((txts === "اضافة" || txts === "أضافة" || txts === "إضافة" || txts === "اضافه" || txts === "13") && isGroupMsg === true) {
      const orang = args[1]
      if (args.length === 1) return client.reply(from, 'لأستخدام هذه الميزة ارسل الأمر *اضافة* 96655xxxxxxx', id)
      if (!isGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا من قبل مشرفي القروب ⛔', id)
      if (!isBotGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا عندما يكون الروبوت مشرف 🤖', id)
      try {
          await client.addParticipant(from,`${orang}@c.us`)
      } catch {
          client.reply(from, mess.error.Ad, id)
      }
    }
  
    else if ((txts === "اعضاء_القروب" || txts === "أعضاء_القروب" || txts === "14") && isGroupMsg === true) {
      if (!isGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا من قبل مشرفي القروب ⛔', id)
      const groupMem = await client.getGroupMembers(groupId)
      let hehe = '═✪〘 اعضاء القروب 〙✪═\n'
      for (let i = 0; i < groupMem.length; i++) {
          hehe += '╠➥'
          hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
      }
      hehe += '═〘 اعضاء القروب 〙'
      await client.sendTextWithMentions(from, hehe)
  }  
  
    else if ((txts === "إزالة_الكل" || txts === "ازالة_الكل" || txts === "15") && isGroupMsg === true) {
      const isGroupOwner = sender.id === chat.groupMetadata.owner
      if (!isGroupOwner) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا من قبل مؤسس القروب ⛔', id)
      if (!isBotGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا عندما يكون الروبوت مشرف 🤖', id)
      const allMem = await client.getGroupMembers(groupId)
      for (let i = 0; i < allMem.length; i++) {
          if (groupAdmins.includes(allMem[i].id)) {
              console.log('مشرفي القروب')
          } else {
              await client.removeParticipant(groupId, allMem[i].id)
          }
      }
      client.reply(from, 'تم طرد كل الأعضاء ✔️', id)
  } 
  
    else if ((txts === "رابط_القروب" || txts === "رابط" || txts === "16") && isGroupMsg === true) {
        if (!isBotGroupAdmins) return client.reply(from, 'لا يمكن استخدام هذا الأمر إلا عندما يكون الروبوت مشرف 🤖', id)
                 const inviteLink = await client.getGroupInviteLink(groupId);
                 client.sendLinkWithAutoPreview(from, inviteLink, `\رابط قروب *${name}*`)
    }

    else if (txts === "بث") {
      const isfile = quotedMsg && quotedMsg.type === 'image' || quotedMsg && quotedMsg.type === 'video'
      if (!isOwner) return await client.sendText(from, 'هذه الميزة للـ owner فقط', id)
          if ((isMedia || isfile) && args.length >= 1) {
              const msg = arg2.join(" ")
              const encryptMedia = isfile ? quotedMsg : message
              const _mimetype = isfile ? quotedMsg.mimetype : mimetype
              const mediaData = await decryptMedia(encryptMedia)
              const base64 = `data:${_mimetype};base64,${mediaData.toString("base64")}`
              const chatids = await client.getAllChatIds()
              for (let lop of chatids) {
                  let chatid = await client.getChatById(lop)
                  if (chatid.isGroup) await client.sendFile(lop, base64, base64, `${msg}`)
                  .then((result) => { console.log('Result: ', result); })
                  .catch((error) => { console.error('Error when sending: ', error); });
    
              }
              client.reply(from, 'تم نشر الرسالة!', id)
          } 
    }
  
  
  
      
   } catch(error){
  }
   
}
