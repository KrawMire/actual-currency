using System;
using Microsoft.EntityFrameworkCore;

namespace ActualCurrency.Server.Models
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected readonly IConfiguration Configuration;

        public DatabaseContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(Configuration.GetConnectionString("PostgreSQL"));
        }
    }
}
