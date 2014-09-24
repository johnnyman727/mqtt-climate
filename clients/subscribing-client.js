var mqtt = require('mqtt')
  // Make sure to change this to the IP address of your MQTT broker
  , brokerIP = '192.168.128.252'
  , brokerPort = 1883
  , client = mqtt.createClient(brokerPort, brokerIP, {keepalive: 10000});
 
// Subscribe to the temperature topic
client.subscribe('temperature');
 
// When a temperature is published, it will show up here
client.on('message', function (topic, data) {
  if (topic === 'temperature') {
    console.log('the temperature is now', data);
  }
});
