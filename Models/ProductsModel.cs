using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Bogus.DataSets;

namespace InvBackend.Models
{
    public class ProductsModel
    {
     

        [DisplayName("Id Number")]
        public int Id { get; set; }


        [DisplayName("Product Number")]
        public string Name { get; set; }


        [DisplayName("Cost to Customer")]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [DisplayName("What you get...")]
        public string Description { get; set; }

    }
}
