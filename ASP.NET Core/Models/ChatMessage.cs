using System;
using System.Text.Json.Serialization;

namespace ASP_NET_Core.Models;

public class ChatMessage
{
    [JsonPropertyName("timestamp")]
    public DateTime Timestamp { get; set; }
    [JsonPropertyName("author")]
    public ChatUser Author { get; set; }
    [JsonPropertyName("text")]
    public string Text { get; set; }
}
