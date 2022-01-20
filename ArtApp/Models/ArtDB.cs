using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ArtApp.Models
{
	public class Favorite
	{
		public int id { get; set; }
		public string username { get; set; }
		public int artwork_id { get; set; }
		public string thumbnail_url { get; set; }

		public string artist { get; set; }
		public string mynotes { get; set; }
	}

	public class ArtContext : DbContext
	{
		public DbSet<Favorite> Favorites { get; set; }
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESSGC;Database=artdb;Integrated Security=SSPI;");
			// Or For username/password, use the following:
			// optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=efconsole1;User Id=sa;Password=abc123;");
		}
	}

	public class ArtDB
	{
		public static List<Favorite> GetFavorites(string username)
		{
			List<Favorite> result = null;
			using (ArtContext ctx = new ArtContext())
			{
				result = ctx.Favorites.Where(s => s.username == username).ToList();
			}
			return result;
		}

		public static bool AddFavorite(Favorite fav)
		{
			using (ArtContext ctx = new ArtContext())
			{
				ctx.Favorites.Add(fav);
				ctx.SaveChanges();
			}
			return true;
		}
	}
}
