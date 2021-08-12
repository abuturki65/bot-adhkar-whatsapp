

<p align="center">
  <img align="center" src="/bot-adkhar-termux-1-1536x864.png" alt="Logo" width="768" height="432">
</p>


#  Bot Adkhar WhatsApp || بوت أذكار للواتساب
##### A bot that sends adhkar, photos and videos automatically every hour to all your groups
##### روبوت يرسل الأذكار والصور ومقاطع الفيديو تلقائيًا كل ساعة لجميع مجموعاتك
##### شكرا
@open-wa/wa-automate-nodejs

#####

# Installation linux || طريقة التثبيت للينكس

```bash
> sudo apt-get update && sudo apt-get upgrade -y
> sudo apt-get install curl -y
> curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash 
> sudo apt-get install -y nodejs
> sudo apt-get install -y git
> git clone https://github.com/adhkarbot/bot-adhkar-whatsapp
> cd bot-adkhar-whatsapp
> npm i
> node index.js
```

# Installation Termux || طريقة التثبيت تيرماكس

```bash
> pkg update && pkg upgrade
> pkg install proot-distro
> proot-distro install alpine
> proot-distro login alpine
> apk update && apk add --no-cache nmap && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
  apk update && \
  apk add --no-cache \
  chromium
> apk add --update nodejs npm
> apk add git
> git clone https://github.com/adhkarbotbot/bot-adhkar-whatsapp
> cd bot-adkhar-whatsapp
> npm i
> node index.js
```









# Bot features || مميزات البوت

| Sticker Creator |                Feature           |
| :-------------: | :------------------------------: | 
|       ✅        | مرحبا                                |
|       ✅        | ذكر                                  |
|       ✅        | قرآن كريم                             |
|       ✅        | صور                                  |
|       ✅        | فيديو                                |
|       ✅        | أذكار الصباح                         |
|       ✅        | أذكار المساء                          |
|       ✅        | بث صور او فيديو او صوت لجميع القروبات |
|       ✅        | إرسال تلقائ للاذكار                   |










