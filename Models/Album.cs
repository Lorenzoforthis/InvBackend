namespace InvBackend.Models
{
    internal class Album
    {
        public int Id { get; set; }
        public string AlbumName { get; set; }
        public string ArtistName { get; set; }
        public int Year { get; set; }

        public String Description { get; set; }
    }
}
