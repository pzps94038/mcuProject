using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.Data;
using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.ApiController
{
    [Route("api/[controller]")]
    [ApiController]
    public class AspNetUserController : ControllerBase
    {
        private readonly IAspNetUserResposity _aspnetuserResposity;

        public AspNetUserController(IAspNetUserResposity aspnetuserResposity)
        {
            _aspnetuserResposity = aspnetuserResposity;
        }
        [HttpGet]
        [Route("api/[action]")]
        public IEnumerable<AspNetUser> GetAspNetUsers()
        {
            return _aspnetuserResposity.GetAspNetUsers();
        }        
        [HttpGet]
        [Route("api/[action]")]
        public AspNetUser GetAspNetUserByid(string id)
        {
            return _aspnetuserResposity.GetAspNetUserByid(id);
        }
    }
}
