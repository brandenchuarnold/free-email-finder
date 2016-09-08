function autoReply() {
  var inboxThreads = GmailApp.getInboxThreads();
  for (var i = 0; i != inboxThreads.length; ++i)
  {
    if (inboxThreads[i].isUnread())
    {
      var thread = inboxThreads[i];
      var messages = thread.getMessages();
      for (var j = 0; j != messages.length; ++j)
      {
        var message = messages[j];
        // If the message is from a student
        // and the student is asking for code help
        if (!message.getFrom().includes('shaffer')
            && !message.getFrom().includes('barnett')
            && message.getFrom().includes('@vt.edu')
            && message.getBody().match(/[java|3114|help|code|script|error|partner|project|milestone]/i))
        {
          thread.markRead();
          message.reply("I apolgize, but I am unable to provide help through email. Please see me during office hours below:\n"
                        + "M: 10:00 - 11:15"
                        + "M: 17:15 - 19:00"
                        + "T: 17:00 - 19:00"
                        + "W: 16:00 - 19:00"
                        + "R: 10:00 - 11:00"
                        + "F: 10:15 - 11:15");
        }
      }
    }
  }
}
