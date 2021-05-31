using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Data
{
    public class AspNetUserResposity : IAspNetUserResposity
    {
        ApiIdentityDbContext _dbContext;
        public AspNetUserResposity(ApiIdentityDbContext doContext)
        {
            _dbContext = doContext;
        }
        public IEnumerable<AspNetUser> GetAspNetUsers()
        {
            var aspnetusers = _dbContext.AspNetUsers.ToList();
            return aspnetusers;
        }

        public AspNetUser GetAspNetUserByid(string id)
        {
            var aspnetuser = _dbContext.AspNetUsers.FirstOrDefault(x => x.Id == id);
            return aspnetuser;            
        }
    }
}
