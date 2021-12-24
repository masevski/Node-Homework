const os = require('os')
const fs = require('fs')
const dns = require('dns');

console.log(os.release())
console.log(os.type())
console.log(os.platform())

fs.readFile('test.txt', 'utf8', function(err, data){
    if (err) {
        console.error(err)
        return
      }
      console.log(data)
});
fs.rename('text.txt', 'yeayea.txt', err => {
    if (err) {
        console.error(err)
        return
      }
      console.log('Name changed!')
})
fs.unlink('delete.txt', function (err) {
    if (err) {
        console.error(err)
        return
      }
      console.log('File deleted!')
});

console.log(dns.getServers());
dns.lookup('google.com', function (err, addresses) {
    console.log(addresses);
});
dns.resolveNs('geeksforgeeks.org', (err, 
    addresses) => console.log('NS records: %j', addresses)
);