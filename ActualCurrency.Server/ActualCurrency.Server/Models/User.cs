using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ActualCurrency.Server.Models
{
    [Table("users")]
    public class User
    {
        [Column("id")]
        public Guid Id { get; set; }

        [Column("email")]
        public string? Email { get; set; }

        [Column("password")]
        public string? Password { get; set; }
    }
}

