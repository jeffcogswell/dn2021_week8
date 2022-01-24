using DBAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DBAPI.Controllers
{
	[Route("band")]
	[ApiController]
	public class BandController : ControllerBase
	{
		// Get all
		[HttpGet]
		public List<Band> GetAll()
		{
			return Band.GetAll();
		}

		// Add new
		[HttpPost]
		public Band AddNew(Band newband)
		{
			return Band.Add(newband);
		}

		// Delete
		// Example:     https://localhost:44383/band?id=2
		[HttpDelete]
		public bool Delete(int id)
		{
			return Band.Delete(id);
		}
	}
}
