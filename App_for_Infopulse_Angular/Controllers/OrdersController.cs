using Microsoft.AspNetCore.Mvc;
using App_for_Infopulse_Angular.Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App_for_Infopulse_Angular.Shared.Models;

namespace App_for_Infopulse_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly OrderService _orderService;
        public OrdersController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        //[Route("{action}")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _orderService.GetAllAsync());
        }

        [HttpGet]
        [Route("{action}")]
        public async Task<IActionResult> Get([FromQuery] long orderId)
        {
            return Ok(await _orderService.GetAsync(orderId));
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrderAsync(Order order)
        {
            try
            {
                await _orderService.CreateOrderAsync(order);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Order not created");
            }
        } 
        
        
        [HttpPut]
        public async Task<IActionResult> UpdateOrderAsync(Order order)
        {
            try
            {
                await _orderService.UpdateOrderAsync(order);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Order not created");
            }
        }
    }
}
