function readEmailsForFreeFood()
{
  GmailApp.createLabel('Free');
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
        if (message.getBody().match(/free/i))
        {
          thread.markRead();
          thread.moveToArchive();
          thread.addLabel(GmailApp.getUserLabelByName("Free"));
          break;
        }
      }
    }
  }
}
