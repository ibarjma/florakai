// SDK de Mercado Pago
const mercadopago = require('mercadopago');
// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-1663595164948995-082217-ead72e7cb843e5ef98883445e74ef4e4-187415956'
});
const mercadopagoCtrl = {};
mercadopagoCtrl.makecheckout = (preference, res) => {
console.log(preference);
return mercadopago.preferences.create(preference);
};
module.exports = mercadopagoCtrl;