const { rawListeners } = require("../models/Order.js");
const Order = require("../models/Order.js");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    console.log(orders);
    res.json({
      success: true,
      data: orders,
      msg: "show all orders",
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    res.json({
      msg: `show order with id ${id}`,
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

const createOrder = async (req, res) => {
  try {
    const { kind, name, pieces } = req.body;
    const order = await Order.create({ kind, name, pieces });

    res.json({
      msg: `user with id ${order.id}`,
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    res.json({
      msg: `order with id ${order.id} deleted`,
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { kind, name, pieces } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { kind, name, pieces },
      { new: true }
    );

    res.json({
      msg: `order with id ${order.id} updated`,
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
};
