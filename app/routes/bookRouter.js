"use strict";

/* -------------------------------------------------------
    EXPRESSJS - Library Managament Project with Sequelize
------------------------------------------------------- */
//TODO1----Controllerde oluşturduğumuz crud işlemlerin route işlemleri için öncelikle require etmek gerek hem router' i sondarsında da yazdığım controller'i
const router=require('express').Router()

const contBook=require('../controllers/bookController');

// const bookModelAss = require('../models/libModel');

router.route('/')
.post(contBook.create)
.get(contBook.list)

router.route('/:id')
.delete(contBook.delete)
.put(contBook.update)
.get(contBook.read)

module.exports=router