using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasicAPI.Controllers
{
	[Route("user")]
	[ApiController]
	public class UserController : ControllerBase
	{
		//     GET /user
		[HttpGet]
		public UserInfo Get()
		{
			return UserInfo.User;
		}

		//     POST /user
		[HttpPost]
		public UserInfo Set(UserInfo user)
		{
			UserInfo.User.username = user.username;
			UserInfo.User.firstname = user.firstname;
			UserInfo.User.lastname = user.lastname;
			UserInfo.User.email = user.email.ToLower();
			return UserInfo.User;
		}
	}
}
