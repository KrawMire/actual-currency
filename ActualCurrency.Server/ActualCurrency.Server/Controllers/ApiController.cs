using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ActualCurrency.Server.Controllers
{
    public class ApiController : Controller
    {
        private string baseUrl = "http://www.cbr.ru/scripts/XML_daily.asp?date_req=";
        private HttpClient client = new HttpClient();
        
        [HttpGet]
        [Route("api/quotation/{strDate}")]
        public async Task<IActionResult> Index(string strDate)
        {
            List<Models.Valute> valutes;
            DateTime date;

            try
            {
                date = DateTime.Parse(strDate);
            }
            catch (Exception ex)
            {
                return Json(new Responses.ErrorResponse("Could not convert given date"));
            }

            string url = baseUrl + date.ToString("dd/MM/yyyy");
            HttpResponseMessage response = await client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                var byteResponse = await response.Content.ReadAsByteArrayAsync();

                if (byteResponse != null)
                {
                    Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
                    Encoding enc = Encoding.GetEncoding("windows-1251");

                    string xmlString = enc.GetString(byteResponse);
                    var xDoc = XDocument.Parse(xmlString);
                    var items = xDoc.Root.Elements("ValCurs")
                        .Select(element => element.Value)
                        .ToList();

                    return Json(JsonConvert.SerializeObject(items));
                }
            }

            return Json(new Responses.ErrorResponse("Could not get data"));
        }
    }
}

