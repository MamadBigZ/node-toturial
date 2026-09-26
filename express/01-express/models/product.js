const fs = require("fs");
const path = require("path");

const products = [];

module.exports = class Products {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
