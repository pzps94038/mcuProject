using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Data
{
    public interface IOrderDetailResposity
    {
        IEnumerable<OrderDetail> GetOrderDetails();

        OrderDetail GeOrderDetailByid(int id);

        OrderDetail AddOrderDetail(OrderDetail orderdetail);
       
    }
}
