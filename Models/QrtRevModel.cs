namespace InvBackend.Models
{
    public class QrtRevModel
    {
        public int Id { get; set; }
        public required string CompanyName { get; set; }
        public required string Industry { get; set; }
        public decimal Eps { get; set; }
        public decimal OperatingRev { get; set; }
        public decimal OperatingProfit { get; set; }
        public decimal NonOperating { get; set; }
        public decimal NetIncome { get; set; }



    }
}
