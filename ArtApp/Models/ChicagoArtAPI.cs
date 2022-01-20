using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ArtApp.Models
{
	public class ArtworksResponse
	{
		public List<ArtworkResponse> data { get; set; }
		public ConfigResponse config { get; set; }
	}

	public class ArtworkResponse
	{
		public int id { get; set; }
		public string api_link { get; set; }
		public string medium_display { get; set; }
		public string artist_title { get; set; }
		public string image_id { get; set; }
	}

	public class ConfigResponse
	{
		public string iiif_url { get; set; }
	}

	public class ChicagoArtAPI
	{
		private static HttpClient _realClient = null;
		public static HttpClient MyHttp
		{
			get
			{
				if (_realClient == null)
				{
					_realClient = new HttpClient();
					_realClient.BaseAddress = new Uri("https://api.artic.edu/api/v1/"); // ADD YOUR OWN BASE ADDRESS HERE
				}
				return _realClient;
			}
		}

		public static async Task<ArtworksResponse> GetArts(int count)
		{
			var connection = await MyHttp.GetAsync($"artworks?limit={count}");
			ArtworksResponse arts = await connection.Content.ReadAsAsync<ArtworksResponse>();
			return arts;
		}

	}
}
