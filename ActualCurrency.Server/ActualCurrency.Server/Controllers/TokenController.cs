using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ActualCurrency.Server.Controllers
{
    public class TokenController : Controller
    {
        [HttpGet]
        [Route("/api/token")]
        public ActionResult Index()
        {
            return Json(new Responses.Response(Guid.NewGuid().ToString()));
        }
    }
}

