mqtt-climate
============

A demo of how to use MQTT with Tessel to publish climate information

### Installation

`npm install mqtt-climate`

### Configuration

First, figure out what the IP Address of your computer is. I use the `ifconfig` command on OSX. 

Then, go ahead and copy that IP Address into both of the client files so that they know where their broker is located:

In `clients/publishing-client.js` AND `clients/subscribing-client`:

```.js
brokerIP = '192.168.128.204' // YOUR IP ADDRESS HERE
```

### How to Run

You'll want to start your broker up first so that the clients have something to connect to. For the sake of this demo, we'll run the server with Node (instead of on Tessel):

```
node broker/broker.js
```

Then, start up the client that will be listening for updates:

```
node clients/subscribing-client.js
```

Finally, run the publishing client on Tessel:

```
tessel run clients/publishing-client.js
```

On your broker, you should see an update when each client connects:
```
➜  mqtt-climate git:(master) ✗ node broker/broker.js
listening for clients!
client connected! mqttjs_49d843da95962988
client connected! mqttjs_3dc9e3c7f491e8aa
```

And on your subscribing client you should see the temperature being logged every few seconds:
```
➜  mqtt-climate git:(master) ✗ node clients/subscribing-client.js
the temperature is now 29.1588
the temperature is now 32.3763
the temperature is now 33.5132
the temperature is now 33.9422
```

That's it! This example does a poor job of demonstrating it, but a client can both subscribe and publish to a broker – it's not limited to one or the other.

If you have any questions, shoot me an email (jon@technical.io) or post it on the [Tessel forums](forums.tessel.io)




