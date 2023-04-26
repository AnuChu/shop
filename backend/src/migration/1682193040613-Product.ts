import { MigrationInterface, QueryRunner } from 'typeorm';

export class Product1682193040613 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "product" (id serial PRIMARY KEY, title TEXT, price FLOAT8, image TEXT)`,
    );
    await queryRunner.query(
      `INSERT INTO product (id, title, price, image) VALUES
(1,'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',109.95,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
(2,'Mens Casual Premium Slim Fit T-Shirts',22.3,'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'),
(3,'Mens Cotton Jacket',55.99,'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'),
(4,'Mens Casual Slim Fit',15.99,'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'),
(5,'John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain Bracelet',695,'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'),
(6,'Solid Gold Petite Micropave ',168,'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'),
(7,'White Gold Plated Princess',9.99,'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'),
(8,'Pierced Owl Rose Gold Plated Stainless Steel Double',10.99,'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'),
(9,'WD 2TB Elements Portable External Hard Drive - USB 3.0',64,'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'),
(10,'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',109,'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'),
(11,'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',109,'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'),
(12,'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',114,'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'),
(13,'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',599,'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'),
(14,'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',999.99,'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'),
(15,'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats',56.99,'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'),
(16,'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket',29.95,'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'),
(17,'Rain Jacket Women Windbreaker Striped Climbing Raincoats',39.99,'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'),
(18,'MBJ Womens Solid Short Sleeve Boat Neck V ',9.85,'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'),
(19,'Opna Womens Short Sleeve Moisture',7.95,'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'),
(20,'DANVOUY Womens T Shirt Casual Cotton Short',12.99,'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg')

`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
