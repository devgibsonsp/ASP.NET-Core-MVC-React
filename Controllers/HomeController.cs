using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ASPNetCoreReact.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

      public IActionResult Test()
      {
         ViewData["Message"] = "This is a test page.";
         return View();
      }
   }
}