"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Library Managament Project with Sequelize
------------------------------------------------------- */
module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500;
    console.log("errorHandler worked.");
    res.status(errorStatusCode).send({
      error: true, // special data
      message: err.message, // error string message
      cause: err.cause, // error option cause
      // stack: err.stack, // error details
    });
  };

  // errorhandleri oluşturdum ancak hata olduğunda yakalaması için bunu anasayfada en sona eklemem gerek bu en sona eklenecek middleware çünkü yakaladı an çalışacağından bundan sonraya eklenen middeware ler etkisiz kalacak.