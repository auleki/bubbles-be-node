import Order from "../models/order.model.js";

export default class OrderController {
    constructor() {}

    async getAllOrders(req, res) {
        try {
            const orders = await Order.find({})
            res.status(200).json({data: orders})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getSingleOrder(req, res) {
        try {
            const order = await Order.findById(req.params.id)
            res.status(200).json({data: order})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async editOrder(req, res) {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body)
            await updatedOrder.save()
            res.status(200).json({data: updatedOrder})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
    
    async deleteOrder(req, res) {
        try {
            await Order.findByIdAndDelete(req.params.id)
            res.status(200).json({data: `Order of id: ${req.params.id} deleted`})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async createOrder(req, res) {
        try {
            const newOrder = await new Order(req.body)
            // calculate the total price on the server side as well and add this order to the queueg
            const savedOrder = await newOrder.save()
            res.status(201).json({data: savedOrder})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async cancelOrder(req, res) {
        try {
            // update status to be cancel
            const canceledOrder = await Order.findByIdAndUpdate(req.params.id, {status: 'canceled'})
            await canceledOrder.save()
            res.status(200).json({data: canceledOrder})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
}
