using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ActualCurrency.Server.Controllers
{
    public class RegisterController : Controller
    {
        [HttpPost]
        [Route("api/register")]
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

