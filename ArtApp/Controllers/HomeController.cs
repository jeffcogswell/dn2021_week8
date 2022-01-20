using ArtApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace ArtApp.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}

		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		public async Task<IActionResult> test()
		{
			ArtworksResponse resp = await ChicagoArtAPI.GetArts(10);
			return Content(resp.config.iiif_url);
		}

		public IActionResult testadd()
		{
			Favorite fav = new Favorite();
			fav.username = "fredsmith";
			fav.artwork_id = 100;
			fav.thumbnail_url = "whatever";
			fav.artist = "Van Gogh";
			fav.mynotes = "I really like this one";
			ArtDB.AddFavorite(fav);
			return Content("OK");
		}

		public IActionResult testget()
		{
			List<Favorite> result = ArtDB.GetFavorites("fredsmith");
			return Content(result.Count.ToString());
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
