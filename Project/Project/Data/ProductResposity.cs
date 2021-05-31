using Microsoft.EntityFrameworkCore;
using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Data
{
    public class ProductResposity : IProductResposity
    {
        ApiOrderDbContext _dbContext;
        public ProductResposity(ApiOrderDbContext doContext)
        {
            _dbContext = doContext;
        }
        public Product AddProduct(Product product)
        {
            if (product != null)
            {
                _dbContext.Products.Add(product);
                _dbContext.SaveChanges();
                return product;
            }
            else {
                return null;
            }
        }

        public Product DeleteProduct(int id)
        {
            var product = _dbContext.Products.FirstOrDefault(x => x.ProductId == id);
            _dbContext.Entry(product).State = EntityState.Deleted;
            _dbContext.SaveChanges();
            return product;
        }

        public Product GetProductByid(int id)
        {
            var product = _dbContext.Products.FirstOrDefault(x => x.ProductId == id);
            return product;
        }

        public IEnumerable<Product> GetProducts()
        {
            var products = _dbContext.Products.ToList();
            return products;
        }

        public Product UpdateProduct(Product product)
        {
            _dbContext.Entry(product).State = EntityState.Modified;
            _dbContext.SaveChanges();
            return product;
        }
    }
}
