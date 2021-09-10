using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App_for_Infopulse_Angular.Server.Data;
using App_for_Infopulse_Angular.Server.Repositories;
using App_for_Infopulse_Angular.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace App_for_Infopulse_Angular.Server.Services
{
    public class CustomerService
    {
        private readonly UnitOfWork _db;
        public CustomerService(UnitOfWork db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Customer>> GetAllAsync()
        {
            return (await _db.Customers
                .GetAll()
                .Include(a => a.Orders)
                .ToListAsync())
                .Select(a => {
                    a.OrdersCount = a.Orders.Count;
                    a.TotalOrderCost = a.Orders.Sum(b => b.TotalCost);
                    return a; 
                });
                
        }

        public async Task CreateCustomerAsync(Customer customer)
        {
            _db.Customers.Create(customer);
            await _db.SaveAsync();
        }
    }
}
