using System;
using System.Collections.Generic;

namespace ASP_NET_Core.Models;

public static class ChatData
{

    private static readonly DateTime todayDate = DateTime.Now.Date;
    private static DateTime GetTimestamp(DateTime date, int offsetMinutes = 0) {
        DateTime adjustedDate = date.AddMinutes(offsetMinutes);
        return adjustedDate;
    }
    public static ChatUser FirstUser = new ChatUser
    {
        Id = "1",
        Name = "User"
    };

    public static ChatUser SecondUser = new ChatUser
    {
        Id = "2",
        Name = "Feedback Bot",
        AvatarUrl = "/bot.png"
    };

    public static IEnumerable<ChatMessage> InitialMessages = new[]
    {
        new ChatMessage
        {
            Timestamp =  GetTimestamp(todayDate, -9),
            Author = SecondUser,
            Text = "Hello! We'd love to hear your feedback. Please share your thoughts below!"
        }
    };
}
