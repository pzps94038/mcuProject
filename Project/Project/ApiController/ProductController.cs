using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.Data;
using Project.Models;

namespace Project.ApiController
{
    
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductResposity _productResposity;

        public ProductController(IProductResposity productResposity)
        {
            _productResposity = productResposity;
        }
        [HttpGet]
        [Route("api/[action]")]
        public IEnumerable<Product> GetProducts()
        {
            return _productResposity.GetProducts();
        }
        [HttpPost]
        [Route("api/[action]")]
        public Product AddProduct(Product product)
        {
            return _productResposity.AddProduct(product);
        }
        [HttpPost]
        [Route("[action]")]
        public Product EditProduct(Product product)
        {
            return _productResposity.UpdateProduct(product);
        }
        [HttpPost]
        [Route("api/[action]")]
        public Product DeleteProduct(int id)
        {
            return _productResposity.DeleteProduct(id);
        }
        [HttpGet]
        [Route("api/[action]")]
        public Product GetProductByid(int id)
        {
            return _productResposity.GetProductByid(id);
        }
    }
}