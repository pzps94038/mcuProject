using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project.Models
{
    public partial class OrderDetail
    {
        [Key]
        [Column("OrderID")]
        public int OrderId { get; set; }
        [Column("MemberID")]
        public string MemberId { get; set; }
        public string MemberName { get; set; }
        public string ProductID { get; set; }
        public string ProductName { get; set; }
        public string OrderDate { get; set; }
        public string Quantity { get; set; }
        [Required(ErrorMessage = "此欄位必填")]
        public string Address { get; set; }
        public string Phone { get; set; }
        public string PaymentMethod { get; set; }
        public string PickUpAtTheStoreDate { get; set; }
        public int? TotalPrice { get; set; }
    }
}
