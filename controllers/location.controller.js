import Location from "../models/location.model.js"

export default class LocationController {
    async createLocation(req, res) {
        try {
            const newLocation = await new Location(req.body)
            const savedLocation = await newLocation.save()
            res.status(201).json({data: savedLocation})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getAllLocations(req, res) {
        try {
            const locations = await Location.find({})
            res.status(200).json({data: locations})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getSingleLocation(req, res) {
        try {
            const location = await Location.findById(req.params.id)
            res.status(200).json({data: location})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async editLocation(req, res) {
        try {
            const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body)
            await updatedLocation.save()
            res.status(200).json({data: updatedLocation})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
    
    async deleteLocation(req, res) {
        try {
            await Location.findByIdAndDelete(req.params.id)
            res.status(200).json({data: `Location of id: ${req.params.id} deleted`})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
}
