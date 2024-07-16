"use strict";

/* -------------------------------------------------------
    EXPRESSJS - Library Managament Project with Sequelize
------------------------------------------------------- */

//? MODEL=ORM olduğundan aynı manaya gelmiyor ama aynı işlemi yapıyor bu sebple sequlieze işlemleri burada tanımlanacak
//TODO---1- sequelize clasından önce ihiyac olanlar obj destruc yöntemi ile çıkarılacak
const { Sequelize, DataTypes } = require("sequelize"); // Asıl sequelize işlemlerini yapacağım class {} içinde ilk bulunan büyük harf  S ile başlayana sequelizedir.

//TODO---2- Sequelize clasından new parametresi ile bir instance oluşturuyoruz.
const sequelize = new Sequelize(
  "sqlite:" + (process.env.PORT || "./db.sqlite3")
); //Parantez içinde de öncelikle kullanacağım veri tabanının tipini yazıyorum ardından da hangi dosyada oladuğunu. yani sequlize veri tabanı kullanıyorum ve kullanacağım veri tabanı da burası diyorum
//TODO---3- Artık modelimi oluşturabilirim. Veri tabanaımla alakalı işlemleri sequelize üzerinden yapacağım crud işlemlerini ise bookModelAs üzerinden.
const bookModelAss = sequelize.define("bookModel", {
  //id kendi otomatik oluştruduğu için oluşturmuyorum geri kalanı de erd ye göre oluşturuyorum.
  title: {
    type: DataTypes.STRING(256), //varchar 256
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  ISBN: {
    type: DataTypes.STRING(13),
    allowNull: false,
    unique: true,
  },
  genre: {
    type: DataTypes.STRING(256),
    allowNull: false,
    defaultValue: "text",
  },
  publicationYear: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue:
      "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg",
  },

  // cerateAt ve UpdateAt'i sequelize kendilliğinden oluşturduğu için herhangi bir oşuşturma yapmıyorum.
});
//TODO---4-modelimiz oluştuktan sonra senkronize edeceğim ama sürekli senkronize olmaması için de yaptıktan sonra kodu yoruma dönüştüreceğim
// sequelize.sync({ alter: true });// TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP
//TODO---5- autonticate işlemi ile sequelize işlemi sona eriyor.
sequelize.authenticate()
.then(()=>console.log('DB connected'))
.catch(()=>console.log('DB NOt connected'))

module.exports=bookModelAss
// model işlemlerini controller yaptığından oraya bağlamak lazım


