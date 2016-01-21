function getShortMessages(messages) {
  // messages is an array of objects
  //  messages.message = an array of messages that are < 50 char long
  // getShortMessage should return an array of messages; no objects

  var raw =  messages.map(function(message) {
    // message is an object
    return message.message;
  });

  var filtered = raw.filter(function(message) {
    return (message.length < 50);
  });
  // official solution filers message objects first than passes to map.
  return filtered;
}

module.exports = getShortMessages;
