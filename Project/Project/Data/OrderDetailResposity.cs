using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Data
{
    public class OrderDetailResposity : IOrderDetailResposity
    {
        ApiOrderDbContext _dbContext;
        public OrderDetailResposity(ApiOrderDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public OrderDetail AddOrderDetail(OrderDetail orderdetail)
        {
            if (orderdetail != null)
            {
                _dbContext.OrderDetails.Add(orderdetail);
                _dbContext.SaveChanges();
                return orderdetail;
            }
            else
            {
                return null;
            }
        }

        public OrderDetail GeOrderDetailByid(int id)
        {
            var orderdetail = _dbContext.OrderDetails.FirstOrDefault(x => x.OrderId == id);
            return orderdetail;
        }

        public IEnumerable<OrderDetail> GetOrderDetails()
        {
            var orderdetails = _dbContext.OrderDetails.ToList();
            return orderdetails;
        }
    }
}
