using System;

namespace ActualCurrency.Server.Responses
{
    public class Response
    {
        public Response ()
        {
            this.Success = true;
        }

        public Response(string data)
        {
            this.Success = true;
            this.Data = data;
        }

        public bool Success { get; set; }

        public string? Data { get; set; }
    }
}