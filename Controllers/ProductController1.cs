using Bogus;
using InvBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace InvBackend.Controllers
{
    public class Product : Controller
    {
        public IActionResult Index()
        {
            List<ProductsModel> productsList = new List<ProductsModel>();

            productsList.Add(new ProductsModel { Id = 1 , Price = 5.99m, Description = "This is a plastic stuff" });
            productsList.Add(new ProductsModel { Id = 2,  Price = 45.09m, Description = "This is a Cam stuff" });
            productsList.Add(new ProductsModel { Id = 3,  Price = 20.99m, Description = "Storrge" });
            productsList.Add(new ProductsModel { Id = 4,  Price = 633.99m, Description = "Wsiht and " });

            for (int i = 0; i < 100; i++)
            {
                productsList.Add(new Faker<ProductsModel>()
                    .RuleFor(p => p.Id, i + 5)
                    .RuleFor(p => p.Name, f => f.Commerce.ProductName())
                    .RuleFor(p => p.Price, f => f.Random.Decimal(100))
                    .RuleFor(p => p.Description, f => f.Rant.Review())
                    );
            }



            return View(productsList);
        }


        public IActionResult Message()
        {
            return View("Message");
        }

        public IActionResult AlbumView()
        {
            AccessDAO accessMysql = new AccessDAO();

            List<Album> albums = accessMysql.getAllAlbums();

            return View(albums);
        }
    }
}
