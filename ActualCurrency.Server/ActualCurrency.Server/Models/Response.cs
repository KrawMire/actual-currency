using System;

namespace ActualCurrency.Server.Models
{
    public class Response
    {
        public Response(string data)
        {
            this.Success = true;
            this.Data = data;
        }

        public Response(bool success)
        {
            this.Success = success;
        }

        public bool Success { get; set; }
        public string? Data { get; set; }
    }
}