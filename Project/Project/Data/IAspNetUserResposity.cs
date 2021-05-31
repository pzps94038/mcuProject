using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Data
{
    public interface IAspNetUserResposity
    {
        IEnumerable<AspNetUser> GetAspNetUsers();

        AspNetUser GetAspNetUserByid(string id);
    }
}
