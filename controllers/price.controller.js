import Price from "../models/price.model.js"

export default class PriceController {
    constructor() {}

    async getAllPrices(_, res) {
        try {
            const prices = await Price.find({})
            res.status(200).json({data: prices})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async createPrice(req, res) {
        try {
            const newPrice = await new Price(req.body)
            const createdPrice = await newPrice.save()
            res.status(201).json({data: createdPrice})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getSinglePrice(req, res) {
        try {
            const prices = await Price.findById(req.params.id)
            res.status(200).json({data: prices})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async editPrice(req, res) {
        try {
            const updatedPrice = await Price.findByIdAndUpdate(req.params.id, req.body)
            await updatedPrice.save()
            res.status(200).json({data: updatedPrice})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
    
    async deletePrice(req, res) {
        try {
            await Price.findByIdAndDelete(req.params.id)
            res.status(200).json({data: `Price of id: ${req.params.id} deleted`})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

}
