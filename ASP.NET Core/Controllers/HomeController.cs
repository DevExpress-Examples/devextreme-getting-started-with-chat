using Microsoft.AspNetCore.Mvc;
using ASP_NET_Core.Models;

namespace ASP_NET_Core.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var viewModel = new ChatViewModel
        {
            Messages = ChatData.InitialMessages,
            FirstUser = ChatData.FirstUser,
        };

        return View(viewModel);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View();
    }
}
