"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Library Managament Project with Sequelize
------------------------------------------------------- */
const express=require('express');
// frontend ile kulllanacağımdan cors modulü ekliyorum npm i cors ve onu require ediyorum
const cors=require('cors')

const app=express();
//require ettiğim korsu okutuyorum app'e 
app.use(cors())

require('dotenv').config()// dotenv dosyasını bağladm
const PORT= process.env.PORT || 8000;

/********************************************* */ 
// req.body de gelen json data'yı yakalamak için kullanılan built-in middleware
app.use(express.json());
// asenkron kamuttaki hatayı yakamak için indirdiğim modulü bağlıyorum.
require('express-async-errors')





/********************************************* */ 
//*Routes bağlamı

app.use(('/book'),require('./app/routes/bookRouter'))





/********************************************* */ 
//*Errorhandler bağlamı
app.use(require('./app/middlewares/errorHandler'))


/********************************************* */ 
app.listen(PORT,()=>console.log("Running: http://127.0.0.1:" + PORT));
