using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Data
{
    public interface IProductResposity
    {
        IEnumerable<Product> GetProducts();

        Product GetProductByid(int id);

        Product AddProduct(Product product);

        Product UpdateProduct(Product product);

        Product DeleteProduct(int id);
    }
}
