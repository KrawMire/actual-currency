using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ActualCurrency.Server.Models;

namespace ActualCurrency.Server.Controllers
{
    public class LoginController : Controller
    {
        private DatabaseContext context;

        public LoginController(IConfiguration configuration)
        {
            context = new DatabaseContext(configuration);
        }

        [HttpPost]
        [Route("/api/login/")]
        public IActionResult Index([FromBody]Models.User user)
        {
            if (user.Email != null && user.Password != null)
            {
                try
                {
                    var dbUser = context.Users.Where(u => u.Email == user.Email && u.Password == user.Password).FirstOrDefault();

                    if (dbUser != null)
                    {
                        return Json(new Responses.Response(dbUser.Id.ToString()));
                    }
                    else
                    {
                        return Json(new Responses.ErrorResponse("Could not find user with that email and password"));
                    }
                }
                catch (Exception ex)
                {
                    return Json(new Responses.ErrorResponse("An error occured while logging in: " + ex.Message));
                }
            }

            return Json(new Responses.ErrorResponse("Something went wrong"));
        }
    }
}

