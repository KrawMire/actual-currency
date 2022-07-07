using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ActualCurrency.Server.Models;

namespace ActualCurrency.Server.Controllers
{
    public class RegisterController : Controller
    {
        private DatabaseContext context;

        public RegisterController(IConfiguration configuration)
        {
            context = new DatabaseContext(configuration);
        }

        [HttpPost]
        [Route("api/register")]
        public IActionResult Index([FromBody]Models.User user)
        {
            if (user.Email != null && user.Password != null)
            {
                try
                {
                    user.Id = Guid.NewGuid();

                    context.Users.Add(user);
                    context.SaveChanges();
                }
                catch (Exception ex)
                {
                    return Json(new Responses.ErrorResponse(ex.Message));
                }
               
                return Json(new Responses.Response(user.Id.ToString()));
            }

            return Json(new Responses.ErrorResponse("Something went wrong"));
        }
    }
}

