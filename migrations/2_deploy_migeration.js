var Wallet = artifacts.require('Wallet');
const tronWeb = require("tronweb");
//mainnet addresses
//const payees = [TRc7JCUtMopM3sADYDj5KUBhzD1K3q1JsR,TGpSjS9wg4tJRVv69bnCJCq9mGAmkMaSFC,TLx5zMUwqcTu9iUmqpZsFMCRnNA2c1cAxt,TC9v3xRhXkH5pafkCoaEHeVodyX1n1x9Vh,TJriuKLDcDjHrKUZvaoQvX84zLT2vy5GJv];
const payees = [tronWeb.address.toHex('TDravg2cuBZZsDwWhZW1qKwvcHatBsQH39',
tronWeb.address.toHex('TC4XiwfbZAFsJYUtjGaTeuqX831DXaL1Ru'),
tronWeb.address.toHex('TNytVhbU2j6xktBLtZDka5a4R7F2z63aNS'),
tronWeb.address.toHex('TNkxxKF6wJoWEds273rULFpoba6aBd7uNw'),
tronWeb.address.toHex('TEgZKTD3QLmWXqub1ffaxbXYWtDmd7uECb')
)];
//const payees = [TDC5pkxZLUQbp3pEYdd8E1d6VZuyF4S5Zb];

const shares=[10,10,60,20,5];
//const shares=[90];
 
module.exports = function (deployer) {
  deployer.deploy(Wallet,payees,shares);
};