using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App_for_Infopulse_Angular.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "Customers",
            //    columns: table => new
            //    {
            //        Id = table.Column<long>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: true),
            //        CreateDate = table.Column<DateTime>(nullable: false),
            //        Address = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Customers", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Products",
            //    columns: table => new
            //    {
            //        ProductId = table.Column<long>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        CreatedDate = table.Column<DateTime>(nullable: false),
            //        Name = table.Column<string>(nullable: true),
            //        ProductNumber = table.Column<string>(nullable: true),
            //        Category = table.Column<int>(nullable: false),
            //        ProductSize = table.Column<int>(nullable: false),
            //        Quantity = table.Column<int>(nullable: false),
            //        Price = table.Column<decimal>(nullable: false),
            //        Description = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Products", x => x.ProductId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Orders",
            //    columns: table => new
            //    {
            //        OrderId = table.Column<long>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        TotalCost = table.Column<decimal>(nullable: false),
            //        CustomerId = table.Column<long>(nullable: false),
            //        Status = table.Column<int>(nullable: false),
            //        DateOfOrder = table.Column<DateTime>(nullable: false),
            //        Comment = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Orders", x => x.OrderId);
            //        table.ForeignKey(
            //            name: "FK_Orders_Customers_CustomerId",
            //            column: x => x.CustomerId,
            //            principalTable: "Customers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ProductsInOders",
            //    columns: table => new
            //    {
            //        Id = table.Column<long>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ProductId = table.Column<long>(nullable: false),
            //        OrderId = table.Column<long>(nullable: true),
            //        Quantity = table.Column<int>(nullable: false),
            //        ProductPrice = table.Column<decimal>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ProductsInOders", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_ProductsInOders_Orders_OrderId",
            //            column: x => x.OrderId,
            //            principalTable: "Orders",
            //            principalColumn: "OrderId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_ProductsInOders_Products_ProductId",
            //            column: x => x.ProductId,
            //            principalTable: "Products",
            //            principalColumn: "ProductId",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Orders_CustomerId",
            //    table: "Orders",
            //    column: "CustomerId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_ProductsInOders_OrderId",
            //    table: "ProductsInOders",
            //    column: "OrderId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_ProductsInOders_ProductId",
            //    table: "ProductsInOders",
            //    column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductsInOders");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
