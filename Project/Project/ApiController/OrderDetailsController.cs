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
    [ApiController]
    public class OrderDetailsController : ControllerBase
    {
        private readonly IOrderDetailResposity _orderdetailResposity;
        public OrderDetailsController(IOrderDetailResposity orderdetailResposity)
        {
            _orderdetailResposity = orderdetailResposity;
        }
        [HttpGet]
        [Route("api/[action]")]
        public IEnumerable<OrderDetail> GetOrderDetails()
        {
            return _orderdetailResposity.GetOrderDetails();
        }
        [HttpPost]
        [Route("api/[action]")]
        public OrderDetail AddOrderDetail(OrderDetail orderdetail)
        {
            return _orderdetailResposity.AddOrderDetail(orderdetail);
        }
        [HttpGet]
        [Route("api/[action]")]
        public OrderDetail GetOrderDetailByid(int id)
        {
            return _orderdetailResposity.GeOrderDetailByid(id);
        }
    }
}
