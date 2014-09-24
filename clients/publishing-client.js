var mqtt = require('mqtt')
  // Make sure to replace this line with the IP Address of your MQTT server
  , brokerIP = '192.168.128.252'
  , brokerPort = 1883
  , client = mqtt.createClient(brokerPort, brokerIP, {keepalive: 10000})
  , tessel = require('tessel')
  , climate = require('climate-si7020').use(tessel.port['A']);

climate.on('ready', function ready() {
  console.log('climate ready');
  // We will set an interval of 5 seconds to make sure we don't use up all of Tessel's 4 sockets
  setInterval(function() {
    // Read the temperature
    climate.readTemperature(function(err, temperature) {
      // If there was no error
      if (!err) {
        console.log('publishing temp', temperature.toFixed(4));
        // Publish the string representation of the temperature
        client.publish('temperature', temperature.toFixed(4));
      }
    });
  }, 5000);
});