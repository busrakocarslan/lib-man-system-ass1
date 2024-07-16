"use strict";

/* -------------------------------------------------------
    EXPRESSJS - Library Managament Project with Sequelize
------------------------------------------------------- */

//TODO--1- öncellikle modeli bağlıyorum.Çünkü model işlemleri controllerde yapılıyor.
const bookModelAss = require("../models/libModel");

// burada yapılacak işlemler CRUD işlemleri
module.exports = {
  list: async (req, res) => {
    const data = await bookModelAss.findAndCountAll(req.body);
    console.log(data);
    res.status(200).send({
        error:false,
        result:data// böyle yazdığında bilgilerin tamamı geliyor ama req.body yazınca sadece json olarak senin yazdığın geliyor
    })
  },
  create: async (req, res) => {
    const data = await bookModelAss.create(req.body);
    res.status(201).send({
        error:false,
        result:data
    })
  },
  update:async (req,res)=>{
    const data= await bookModelAss.update(req.body,{where:{id:req.params.id}})// where ile filtreleme yapıyorum dikkat nested obje
    res.status(202).send({
        error:false,
        result:data,
        message:data[0]? "updated" : "Not Updated",// değilşim olursa consolde dikkat et array içimde kaç değişim olduysa o geliyor olmazsa array içinde 0 geliyor mesaj ayarlaması da buna göre yapılıyor.
        new:await bookModelAss.findByPk(req.params.id)// böylede where yapmadan fitreleme olabilir premarykey demek new parametresi ile yeni oluşan data görüntüleniyor
    })
  },

  delete: async(req,res)=>{
    const data= await bookModelAss.destroy({where:{id:req.params.id}})
   if (data){
    res.sendStatus(204)
   }else{
    res.errorStatusCode=404;
    throw new Error("Can not delete.Maybe already deleted")
   }
  },

  read: async(req,res)=>{
    const data=await bookModelAss.findByPk(req.params.id)// kısa yazım where ile de filtreeleme olurdu ama bu daha güzel
    res.status(200).send({
        error:false,
        result:data
    })
  }
};
