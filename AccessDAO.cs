using InvBackend.Models;
using MySql.Data.MySqlClient;

namespace InvBackend
{
    internal class AccessDAO
    {
        private string connectionStringMusic = "datasource=localhost;port=3306; username=root;password=root;database=music;";
        private string connectionStringData = "datasource=localhost;port=3306; username=root;password=root;database=datadb;";

        public List<Album> getAllAlbums()
        {
            List<Album> returnThese = new List<Album>();

            using (MySqlConnection connection = new MySqlConnection(connectionStringMusic))
            {
                connection.Open();

                MySqlCommand command = new MySqlCommand("SELECT * FROM ALBUMS", connection);

                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Album a = new Album
                        {
                            Id = reader.GetInt32(0),
                            AlbumName = reader.GetString(1),
                            ArtistName = reader.GetString(2),
                            Year = reader.GetInt32(3),
                            Description = reader.GetString(4),
                        };
                        returnThese.Add(a); // Add the album to the list
                    }
                }
            }

            return returnThese;
        }

        public List<QrtRevModel> getAllData()
        {
            List<QrtRevModel> returnThese = new List<QrtRevModel>();

            using (MySqlConnection connection = new MySqlConnection(connectionStringData))
            {
                connection.Open();

                MySqlCommand command = new MySqlCommand("SELECT * FROM quarterly_financials_typed", connection);

                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        QrtRevModel data = new QrtRevModel
                        {
                            Id = reader.GetInt32(3), // Assuming this is the primary key and is an integer
                            CompanyName = reader.GetString(4), // Corrected index for company_name
                            Industry = reader.GetString(5), // Corrected index for industry
                            Eps = reader.IsDBNull(6) ? 0 : reader.GetDecimal(6), // Check for NULL
                            OperatingRev = reader.IsDBNull(8) ? 0 : reader.GetDecimal(8), // Check for NULL
                            OperatingProfit = reader.IsDBNull(9) ? 0 : reader.GetDecimal(9), // Check for NULL
                            NonOperating = reader.IsDBNull(10) ? 0 : reader.GetDecimal(10), // Check for NULL
                            NetIncome = reader.IsDBNull(11) ? 0 : reader.GetDecimal(11), // Check for NULL
                        };
                        returnThese.Add(data); // Add the data to the list
                    }
                }
            }

            return returnThese;
        }
    }
}
