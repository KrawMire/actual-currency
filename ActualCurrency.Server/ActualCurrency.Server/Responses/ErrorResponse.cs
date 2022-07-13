using System;
namespace ActualCurrency.Server.Responses
{
    public class ErrorResponse : Response
    {
        public string? Error { get; set; }

        public ErrorResponse()
        {
            this.Success = false;
        }

        public ErrorResponse(string error)
        {
            this.Success = false;
            this.Error = error;
        }
    }
}

