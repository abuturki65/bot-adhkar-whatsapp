const adk = require('./adk.js');
const photo = require('./photo.js');
const videox = require('./video.js');

module.exports = broadcast = async (client) => {
  
    try {

    setInterval(async function(){ 
      const date = new Date(); 
      const allid = await client.getAllChatIds() 
          
       if ((date.getHours() === 01 && date.getMinutes() === 00) || (date.getHours() === 04 && date.getMinutes() === 00) || (date.getHours() === 07 && date.getMinutes() === 00) || (date.getHours() === 10 && date.getMinutes() === 00) || (date.getHours() === 13 && date.getMinutes() === 00) || (date.getHours() === 16 && date.getMinutes() === 00) || (date.getHours() === 19 && date.getMinutes() === 00) || (date.getHours() === 22 && date.getMinutes() === 00)){ 
       
        for (lop of allid){
           let listadk = adk[Math.floor(Math.random() * adk.length)]
           let allchat = await client.getChatById(lop)
          if (allchat.isGroup) await client.sendText(lop, listadk).then((result) => { console.log('Result: ', result); })
          .catch((error) => { console.error('Error when sending: ', error); });
          

            }       
         }

      else if ((date.getHours() === 02 && date.getMinutes() === 00) || (date.getHours() === 05 && date.getMinutes() === 00) || (date.getHours() === 08 && date.getMinutes() === 00) || (date.getHours() === 11 && date.getMinutes() === 00) || (date.getHours() === 14 && date.getMinutes() === 00) || (date.getHours() === 17 && date.getMinutes() === 00) || (date.getHours() === 20 && date.getMinutes() === 00) || (date.getHours() === 23 && date.getMinutes() === 00)){ 
       
        for (lop of allid){
            let listphoto = photo[Math.floor(Math.random() * photo.length)]
            let allchat = await client.getChatById(lop)
           if (allchat.isGroup) await client.sendFileFromUrl(lop, listphoto, "pboto.jpeg", "Photo" ).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           
    
             }       
         }

       else if ((date.getHours() === 03 && date.getMinutes() === 00) || (date.getHours() === 06 && date.getMinutes() === 00) || (date.getHours() === 09 && date.getMinutes() === 00) || (date.getHours() === 12 && date.getMinutes() === 00) || (date.getHours() === 15 && date.getMinutes() === 00) || (date.getHours() === 18 && date.getMinutes() === 00) || (date.getHours() === 21 && date.getMinutes() === 00) || (date.getHours() === 00 && date.getMinutes() === 00)){ 
       
        for (lop of allid){
            let listvideo = videox[Math.floor(Math.random() * videox.length)]
            let allchat = await client.getChatById(lop)
           if (allchat.isGroup) await client.sendFileFromUrl(lop, listvideo, "video.mp4", "video").then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           
    
             }       
         }

           
            } , 60000);


    } catch(error) {
        console.log(error)
    }
}





