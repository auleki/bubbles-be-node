import Axios from "../instances/axios.js"
import User from "../models/user.model.js"
import BaseController from "./base.controller.js"

export default class UserController extends BaseController {

    async createUser(req, res) {
        try {
            const newUser = await new User(req.body)
            const savedUser = await newUser.save()
            res.status(201).json({data: savedUser})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await User.find({})
            res.status(200).json({data: users})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async getSingleUser(req, res) {
        try {
            const id = req.params.id
            const user = await User.findById(id)
            res.status(200).json({data: user})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async editUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body)
            const savedUser = user.save()
            res.status(200).json({data: savedUser})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }

    async deleteUser(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json({data: `User of id: ${req.params.id} deleted`})
        } catch (error) {
            res.status(400).json({data: error})
        }
    }
}
