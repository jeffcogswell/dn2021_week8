﻿// <auto-generated />
using ArtApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ArtApp.Migrations
{
    [DbContext(typeof(ArtContext))]
    [Migration("20220120185446_CreateArtDB")]
    partial class CreateArtDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.22")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ArtApp.Models.Favorite", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("artist")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("artwork_id")
                        .HasColumnType("int");

                    b.Property<string>("mynotes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("thumbnail_url")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Favorites");
                });
#pragma warning restore 612, 618
        }
    }
}