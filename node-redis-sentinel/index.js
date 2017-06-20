var Redis = require('ioredis');
var redis = new Redis({
  sentinels: [{ host: '127.0.0.1', port: 26379 }],
  name: 'mymaster',
  password: ''
});

redis.on('error', console.log);
redis.set('foo', 'bar', console.log);
