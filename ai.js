


module.exports = ai = async(client, message) => {

    try {
   const { id, from } = message
   let {body} = message
   const txt = body.toLowerCase()

   if ((txt.includes('كيفك')) || (txt.includes('كيف حالك')) || (txt.includes('أخباركم')) || (txt.includes('أخبارك')) || (txt.includes('كيفكم'))) {  
    await client.reply(from, "بخير الحمدالله", id);
}

else if ((txt.includes('من معي')) || (txt.includes('من انت')) || (txt.includes('مين معي'))) {  
    await client.reply(from, "معك بوت أذكار 🤖", id);
}

else if ((txt.includes('اتعرف على بنات')) || (txt.includes('أتعرف على بنات'))){

    await client.reply(from, '{يَا أَيُّهَا الَّذِينَ آَمَنُوا لَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ وَمَنْ يَتَّبِعْ خُطُوَاتِ الشَّيْطَانِ فَإِنَّهُ يَأْمُرُ بِالْفَحْشَاءِ وَالْمُنْكَرِ} [النور: 21]', id)
}

else if (txt.includes('سكس')) {

    await client.sendImage(from , 'http://bot.rn0x.com/bot/lib/img/ai/ai1.jpeg', 'photo.jpeg', '{قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ذَلِكَ أَزْكَى لَهُمْ إِنَّ اللَّهَ خَبِيرٌ بِمَا يَصْنَعُونَ} [النور: 30].', id)
}

else if ((txt.includes('بوت ي '))  || (txt.includes('بوت يا'))){
    
    await client.reply(from, 'احترم نفسك', id);
}

else if ((txt.includes('صلي على'))  || (txt.includes('صلو على'))){
    
    await client.reply(from, 'اللهم صلي وسلم على نبينا محمد', id);
}

else if (txt.includes('اللهم')){
    
    await client.reply(from, 'آمين', id);
}

else if ((txt.includes('أحبك')) || (txt.includes('احبك'))){
    
    await client.reply(from, 'أحبك الله الذي أحببتني فيه', id);
}

else if ((txt.includes('انت حقيقي')) || (txt.includes('أنت حقيقي')) || (txt.includes('انت انسان')) || (txt.includes('أنت انسان'))){
    
    await client.reply(from, 'انا روبوت أقوم بمهام معينة لاكن يمكن لصاحب الروبوت بالأطلاع على الرسائل', id);
}

else if (txt.includes('تعرف تسوي')){
    
    await client.reply(from, 'لا ما أعرف', id);
} 

else if (txt.includes('وحيد')) {

    await client.sendImage(from, 'http://bot.rn0x.com/bot/lib/img/ai/ai2.jpg', 'ai2.jpg', 'كلما أحسست أنك وحيد تذكر(ونحن أقرب إليه من حبل الوريد)', id)
}


  
      
} catch(error){
 }
  
  
  }