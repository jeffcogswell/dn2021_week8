using Microsoft.EntityFrameworkCore.Migrations;

namespace ArtApp.Migrations
{
    public partial class CreateArtDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Favorites",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(nullable: true),
                    artwork_id = table.Column<int>(nullable: false),
                    thumbnail_url = table.Column<string>(nullable: true),
                    artist = table.Column<string>(nullable: true),
                    mynotes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorites", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Favorites");
        }
    }
}
