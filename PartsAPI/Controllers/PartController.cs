using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PartsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartsAPI.Controllers
{
	[Route("part")]
	[ApiController]
	public class PartController : ControllerBase
	{

		// Get All
		[HttpGet]
		public List<Part> GetAll()
		{
			return Part.GetAll();
		}

		// Add One
		[HttpPost]
		public Part Add(Part newpart)
		{
			return Part.Add(newpart);
		}

		[HttpPut]
		public Part Update(Part editpart)
		{
			return Part.Update(editpart);
		}

		//[HttpGet]
		//public Part test()
		//{
		//	Part newpart = new Part()
		//	{
		//		name = "Mouse",
		//		description = "Logitech Cool Mouse",
		//		inventory = 10,
		//		onsale = false
		//	};
		//	Part.Add(newpart);
		//	return newpart;
		//}
	}
}
