var Ping = function Ping() {
  this.listeners = {PING: this.pong};
};

Ping.prototype.pong = function pong(message) {
  var obj = { 'command': 'PONG', 'parameters': [ message.parameters[0] ] };
  this.igelkott.push(obj);
};

exports.Plugin = Ping;
