const args = process.argv.slice(2);
const request = require('request')
const fs = require('fs');

request(args[0],(error,response,body)=>{
  console.log('error:', error); // Print the error if one occurred;

  fs.writeFile(args[1],body,(err)=>{
    if (err) console.log(err)
  })
})