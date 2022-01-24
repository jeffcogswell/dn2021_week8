using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasicAPI
{
	public class UserInfo
	{
		public string username { get; set; }
		public string firstname { get; set; }
		public string lastname { get; set; }
		public string email { get; set; }

		private static UserInfo _User = new UserInfo();
		public static UserInfo User
		{
			get
			{
				return _User;
			}
		}
	}
}
