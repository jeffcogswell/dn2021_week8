using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DBAPI.Models
{
	public class Band
	{
        public int id { get; set; }
		public string Name { get; set; }
		public string Bestalbum { get; set; }
		public int Members { get; set; }
		public int Founded { get; set; }

        // Get all bands

        public static List<Band> GetAll()
		{
            using (BandContext ctx = new BandContext())
			{
                var bands = ctx.Bands.ToList();
                return bands;
			}
		}

        // Add a new band

        public static Band Add(Band theband)
		{
            using (BandContext ctx = new BandContext())
			{
                ctx.Add(theband);
                ctx.SaveChanges();
                return theband;
			}
		}

        // Delete a band

        public static bool Delete(int id)
		{
            using (BandContext ctx = new BandContext())
			{
                Band theband = new Band();
                theband.id = id;
                ctx.Remove(theband);
                ctx.SaveChanges();
                return true;
			}

        }

        // Update a band
	}

    public class BandContext : DbContext
    {
        public DbSet<Band> Bands { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESSGC;Database=bandinfo;Integrated Security=SSPI;");
        }
    }
}
