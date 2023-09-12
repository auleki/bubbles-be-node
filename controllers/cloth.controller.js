import Cloth from "../models/cloth.model.js"

export default class ClothesController {
    async createCloth(req, res) {
        try {
            const newCloth = await new Cloth(req.body)
            const createdCloth = await newCloth.save()
            res.status(201).json({data: createdCloth})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getAllClothes(req, res) {
        try {
            const clothes = await Cloth.find({})
            res.status(200).json({data: clothes})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getSingleCloth(req, res) {
        try {
            const cloth = await Cloth.findById(req.params.id)
            res.status(200).json({data: cloth})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async editCloth(req, res) {
        try {
            const updatedCloth = await Cloth.findByIdAndUpdate(req.params.id, req.body, {new: true})
            await updatedCloth.save()
            res.status(200).json({data: updatedCloth})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
    
    async deleteCloth(req, res) {
        try {
            await Cloth.findByIdAndDelete(req.params.id)
            res.status(200).json({data: `Cloth of id: ${req.params.id} deleted`})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
}
