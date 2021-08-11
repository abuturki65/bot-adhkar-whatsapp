const fs = require('fs-extra');

module.exports = {
  t1:fs.readFileSync('./txtt/t1.txt',{encoding:'utf8', flag:'r'}),
  t2:fs.readFileSync('./txtt/t2.txt',{encoding:'utf8', flag:'r'}),
  t3:fs.readFileSync('./txtt/t3.txt',{encoding:'utf8', flag:'r'}),

  } 
   
