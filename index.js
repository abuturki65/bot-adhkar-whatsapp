const { create, Client, decryptMedia } = require('@open-wa/wa-automate');
const txtt = require('./txtt.js');
const moment = require('moment');
const broadcast = require('./broadcast.js');
const quranmenu = require('./quranmenu.js');
const figlet = require('figlet');
const adk = require('./adk.js');
const photo = require('./photo.js');
const videox = require('./video.js');


const start = async (client = new Client()) => {

  try {
  
  console.log("BOT ADKHAR STARTING ....")
  console.log('-----------------------------------------------------------');
  console.log(figlet.textSync('BOT ADKHAR'));
  console.log('-----------------------------------------------------------');
  console.log("start bot adkhar", moment().format('MMMM Do YYYY, h:mm:ss a'));   

  await broadcast(client); // برودكاست اذكار تلقائي


        // x كشف تسجيل الخروج
    client.onStateChanged(state=>{
    console.log('Client State', state)
    if(state==="CONFLICT" || state==="UNLAUNCHED") client.forceRefocus();

    if(state==='UNPAIRED') console.log('Client Logoff')
    
  });
  
  



        // x الأستماع الى الرسائل الواردة 
        await client.onMessage((async (message) => {
          await client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                 client.cutMsgCache()
                }
            })
       await adkr(client, message);
       await quranmenu(client, message); 
       
        }))				

                            

 } catch(error){
}
    
  }  
    
   



    
               // x وظائف البوت
    
async function adkr(client, message) {

  try {
 const { id, from, sender, isMedia, mimetype, quotedMsg } = message;
 let {body} = message;
 const txt = body.toLowerCase();
 const command = body.toLowerCase().split(' ')[0] || ''
 const ownerNumber = ["966559298917@c.us"]; // ضع رقم صاحب البوت 
 const isOwner = ownerNumber.includes(sender.id)
 const arg2 = body.trim().split(/ +/).slice(1)
 const args = body.split(' ')





  if ((txt === "hi") || (txt === "مرحبا") || (txt === "بوت")){
     
  await client.sendButtons(from, txtt.t3, [
    {
        id: "1",
        "text": "تحميل البوت"
    },
], "BOT ADKHAR", moment().format('MMMM Do YYYY, h:mm:ss a'))
  }

  else if (txt === "تحميل البوت"){

    await client.sendText(from, "يرجى زيارة الموقع التالي www.rn0x.com ")
    
   }

   else if ((txt === "اذكار") || (txt === "ذكر") || (txt === "1")){


    let listadk = adk[Math.floor(Math.random() * adk.length)]
    client.reply(from, listadk, id)
    .then((result) => { console.log('Result: ', result); })
    .catch((error) => { console.error('Error when sending: ', error); });


   }

   else if ((txt === "صور") || (txt === "صور عشوائية") || (txt === "5")){


    let listphoto = photo[Math.floor(Math.random() * photo.length)]
    await client.sendFileFromUrl(from,listphoto, 'photo.jpeg', 'Photo', id)
    .then((result) => { console.log('Result: ', result); })
    .catch((error) => { console.error('Error when sending: ', error); });

   }

   else if ((txt === "فيديو") || (txt == "6")){

    let listvideo = videox[Math.floor(Math.random() * videox.length)]
    await client.sendFileFromUrl(from,listvideo, 'video.mp4', 'Video', id)
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

 else if (command == "بث") {
  const isQuotedImage = quotedMsg && quotedMsg.type === 'image' || quotedMsg && quotedMsg.type === 'video' || quotedMsg && quotedMsg.type === 'audio'
  // const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
 if (!isOwner) return await client.sendText(from, 'هذه الميزة للـ owner فقط', id)
      if ((isMedia || isQuotedImage) && args.length >= 1) {
          const msg = arg2.join(" ")
          const encryptMedia = isQuotedImage ? quotedMsg : message
          const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
          const mediaData = await decryptMedia(encryptMedia)
          const base64 = `data:${_mimetype};base64,${mediaData.toString("base64")}`
          const chatids = await client.getAllChatIds()
          for (let lop of chatids) {
              let chatid = await client.getChatById(lop)
              if (chatid.isGroup) await client.sendFile(lop, base64, `${msg}`)
              .then((result) => { console.log('Result: ', result); })
              .catch((error) => { console.error('Error when sending: ', error); });

          }
          client.reply(from, 'تم نشر الرسالة!', id)
      } else if(arg2.length >= 1) {
          const msg = arg2.join(" ")
          const chatids = await client.getAllChatIds()
          for (let lop of chatids) {
              const chatid = await client.getChatById(lop)
              if (chatid.isGroup) await client.sendText(lop, `${msg}`)
              .then((result) => { console.log('Result: ', result); })
              .catch((error) => { console.error('Error when sending: ', error); });

          }
          client.reply(from, 'تم نشر الرسالة!', id)
      }
} 

    
 } catch(error){
}


}
    
    
    
    
    
    
    
    
    
    
    
           // x خصائص جلسة العمل 
           
 const adkhar = {
    useChrome: true,
    autoRefresh:true,
    cacheEnabled:true,
    qrRefreshS: 18,
    authTimeout: 0,
    qrTimeout: 0,
    restartOnCrash: start,
    throwErrorOnTosBlock: false,
    deleteSessionDataOnLogout: false,
    skipUpdateCheck: false,
    bypassCSP:true,
    sessionId: 'Bot Adkhar'
};

async function launch(){
  try{
      const client = await create(adkhar);
      await start(client);
  } catch(error){
  }
}

launch();
