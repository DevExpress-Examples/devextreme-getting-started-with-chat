using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ASP_NET_Core.Models;

public class ChatViewModel
{
    public IEnumerable<ChatMessage> Messages { get; set; }
    public ChatUser FirstUser { get; set; }
}
