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
    public class ProductService
    {
        private readonly UnitOfWork _db;
        public ProductService(UnitOfWork db)
        {
            _db = db;
        }

        public async Task<List<Product>> GetAllAsync()
        {
            return await _db.Products.GetAll().ToListAsync();
        }

        public async Task CreateProductAsync(Product product)
        {
            _db.Products.Create(product);
            await _db.SaveAsync();
        }

        public async Task DeleteProductAsync(long productId)
        {
            _db.Products.Delete(productId);
            await _db.SaveAsync();
        }
    }
}
