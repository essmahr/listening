require('dotenv').config();

var Rsync = require('rsync');

const destUrl = `${process.env.FTPUSER}@${process.env.HOST}:${process.env.REMOTEPATH}`;

var rsync = new Rsync()
  .shell('ssh')
  .flags('arvm')
  .set('port', 22)
  .source('build/')
  .destination(destUrl);

rsync.execute(function(error, code, cmd) {
  console.log('deploy complete, we think.');
});
