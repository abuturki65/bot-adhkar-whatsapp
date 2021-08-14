const { create, Client } = require('@open-wa/wa-automate');
const moment = require('moment');
const broadcast = require('./broadcast.js');
const quranmenu = require('./quranmenu.js');
const figlet = require('figlet');
const menu = require('./menu.js');
const ai = require('./ai.js');
const start = async (client = new Client()) => {

  try {
  
  console.log("BOT ADHKAR STARTING ....")
  console.log('-----------------------------------------------------------');
  console.log(figlet.textSync('BOT ADHKAR'));
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
        await client.onMessage(async (message) => {
          await client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                 client.cutMsgCache()
                }
            })
       await menu(client, message); // خدمات البوت الرئيسية
       await quranmenu(client, message); // قائمة سور القرآن
       await ai(client, message);
       
        })				

                            

 } catch(error){
}
    
  }  
     
           // x خصائص جلسة العمل 
           
 const adhkar = {
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
    sessionId: 'Bot Adhkar'
};

async function launch(){
  try{
      const client = await create(adhkar);
      await start(client);
  } catch(error){
  }
}

launch();
