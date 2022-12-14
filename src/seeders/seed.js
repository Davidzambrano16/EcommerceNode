const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { User,Product,Order,ProductInCart,ProductInOrder,Cart  } = require("../models");

initModels();

const user = [
  {
    username: "EduardoC",
    email: "EduardoCol@gmail.com",
    password: "1234",
  },
  {
    username: "GabiR",
    email: "gabiR@gmail.com",
    password: "1234",
  },
  {
    username: "karen",
    email: "karenZ@gmail.com",
    password: "1234",
  },
  {
    username: "Oscar",
    email: "OscarLo@gmail.com",
    password: "1234",
  },
  {
    username: "Messi",
    email: "Messi10@gmail.com",
    password: "1234",
  }
];

const product = [
  {
    name: "iphone 11",
    price: 1100,
    availableQty: 23,
    status: true,
    userId: 1
  },
  {
    name: "iphone 12",
    price: 1400,
    availableQty: 24,
    status: true,
    userId: 2
  },
  {
    name: "ipad Pro 11",
    price: 1000,
    availableQty: 21,
    status: true,
    userId: 3
  },
  {
    name: "MacBook Air 2022",
    price: 1400,
    availableQty: 22,
    status: true,
    userId: 4
  },
  {
    name: "Air pods Pro 3",
    price: 400,
    availableQty: 23,
    status: true,
    userId: 1
  },
  ,
  {
    name: "iMac 2022 Silver",
    price: 2000,
    availableQty: 23,
    status: true,
    userId: 1
  },

];

const order = [
  {
    totalPrice: 0,
    userId:1,
    status: true,
  },
  {
    totalPrice: 0,
    userId:2,
    status: true,
  },
  {
    totalPrice: 0,
    userId:3,
    status: true,
  },
];

const cart =[
  {
    totalPrice: 0,
    userId: 1,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 2,
    status: true,
  }, {
    totalPrice: 0,
    userId: 3,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 4,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 5,
    status: true,
  },
  
];

const productInCart = [
  {
    cartId: 1,
    productId: 4,
    quantity: 1,
    price: 0,
    status: true
  },
  {
    cartId: 2,
    productId: 5,
    quantity: 1,
    price: 0,
    status: true
  }
];

const productInOrder = [
  {
    orderId:1,  
    productId:1,
    quantity: 1,
    price: 0,
    status:false
  },
  {
    orderId:2,
    productId:2,
    quantity: 1,
    price:0,
    status:false
  },
  {
    orderId:3,
    productId:3,
    quantity: 1,
    price: 0,
    status:false
  },
  
];

async function seeding(){
  await db.sync({force: true})

  await forEach(user, (user)=> User.create(user))
  await forEach(product, (product)=> Product.create(product))
  await forEach(cart, (cart)=> Cart.create(cart))
  await forEach(order, (order)=> Order.create(order))
  await forEach(productInCart, (pic) => ProductInCart.create(pic))
  await forEach(productInOrder, (pio)=> ProductInOrder.create(pio))
  
};
seeding();
