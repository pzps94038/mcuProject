using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.HomeControllers
{
    [Authorize]
    public class CheckoutController : Controller
    {
        public IActionResult Checkout()
        {
            return View();
        }
        public IActionResult AddProduct()
        {
            return View();
        }
        public IActionResult CheckoutConfirmation()
        {
            return View();
        }
        public IActionResult Complete()
        {
            return View();
        }
        public IActionResult OrderDetails()
        {
            return View();
        }

    }
}
