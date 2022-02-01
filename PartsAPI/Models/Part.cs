using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartsAPI.Models
{
	public class Part
	{
		public int id { get; set; }
		public string name { get; set; }
		public string description { get; set; }
		public int inventory { get; set; }
		public bool onsale { get; set; }

		public static Part Add(Part newpart)
		{
			using (CPContext ctx = new CPContext())
			{
				ctx.Add(newpart);
				ctx.SaveChanges();
				return newpart;
			}
		}

		public static List<Part> GetAll()
		{
			using (CPContext ctx = new CPContext())
			{
				List<Part> parts = ctx.Part.ToList();
				return parts;
			}
		}

		public static Part Update(Part editpart)
		{
			using (CPContext ctx = new CPContext())
			{
				ctx.Update(editpart);
				ctx.SaveChanges();
				return editpart;
			}
		}
	}

	public class CPContext : DbContext
	{
		public DbSet<Part> Part { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESSGC;Database=compparts;Integrated Security=SSPI;");
		}
	}
}
