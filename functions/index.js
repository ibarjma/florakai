const functions = require('firebase-functions');
const mercadopagoCtrl = require('./mercadopago');
exports.checkout = functions.https.onCall((preference, context) => {
  return mercadopagoCtrl.makecheckout(preference).then(response => {
  // Este es el checkout generado o link al que nos vamos a posicionar para pagar
  console.log(response.body.init_point);
  let init_point = response.body.init_point
  return { result: init_point };
  }).catch(error => {
   console.log(error);
   return error
  });
});