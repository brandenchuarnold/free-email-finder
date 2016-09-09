function autoReply()
{
  var inboxThreads = GmailApp.getInboxThreads();
  for (var i = 0; i != inboxThreads.length; ++i)
  {
    var thread = inboxThreads[i];
    if (thread.isUnread())
    {
      var messages = thread.getMessages();
      for (var j = 0; j != messages.length; ++j)
      {
        var message = messages[j];
        var sender = message.getFrom();
        // If it is a vt email
        if (sender.search('@vt.edu') != -1
            // And not Shaffer
            && sender.search('shaffer') == -1
            // And not Barnette
            && sender.search('barnett') == -1
            // And not from me
            && sender.getFrom().search('brandena@vt.edu') == -1
            // And specifically to me
            && message.getTo().search('brandena@vt.edu') != -1
            // And asking for help
            && (message.getSubject().match(/[java|eclipse|3114|help|code|script|function|class|error|partner|project|milestone]/i)
                || message.getBody().match(/[java|eclipse|3114|help|code|script|function|class|error|partner|project|milestone]/i)))
        {
          thread.markRead();
          message.reply("This is an automated reply from an unmonitored inbox.\n"
                        + "Please see me during office hours below:\n\n"
                        + "M: 10:00 - 11:15\n"
                        + "M: 17:15 - 19:00\n"
                        + "T: 17:00 - 19:00\n"
                        + "W: 16:00 - 19:00\n"
                        + "R: 10:00 - 11:00\n"
                        + "F: 10:15 - 11:15").moveToTrash();
          thread.moveToTrash();
        }
      }
    }
  }
}
