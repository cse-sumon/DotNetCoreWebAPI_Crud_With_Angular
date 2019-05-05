﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrudWithApi_Angular.Models;

namespace CrudWithApi_Angular.Models
{
    public class PaymentDetailContext:DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options):base(options)
        {

        }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }
      

    }
}
