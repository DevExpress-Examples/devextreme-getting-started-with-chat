using System.Text.Json.Serialization;

namespace ASP_NET_Core.Models;

public class ChatUser
{
    [JsonPropertyName("id")]
    public string Id { get; set; }
    [JsonPropertyName("name")]
    public string Name { get; set; }
    [JsonPropertyName("avatarUrl")]
    public string? AvatarUrl { get; set; }
}
