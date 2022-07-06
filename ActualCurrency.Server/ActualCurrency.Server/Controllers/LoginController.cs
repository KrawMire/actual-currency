using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ActualCurrency.Server.Controllers
{
    public class LoginController : Controller
    {
        [HttpPost]
        [Route("/api/login/")]
        public IActionResult Index([FromBody]Models.User user)
        {
            if (user.Email != null && user.Password != null)
            {
                return Json(new Models.Response(user.Email));
            }

            return Json(new Models.Response(false));
        }
    }
}

