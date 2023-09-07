import {users} from "../model/index.js"
import { StatusCodes } from "http-status-codes"


class UserController{
    
    static showUsers = async(req, res) => {
        try{
            const usersResult = await users.find()
            res.status(StatusCodes.OK).json(usersResult);
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }

    static showUsersById = async(req, res) => {
        try{
            const {id} = req.params;
            const userResultBydid = await users.findById(id);
            res.status(StatusCodes.OK).json(userResultBydid);
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    static registerUser = async(req, res) => {
        try{
            let user = new users(req.body);
            await user.save();
            res.status(StatusCodes.CREATED).send(user.toJSON());
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    static updateUser = async(req, res) => {
        try{
            const {id} = req.params;
            const newUser = await users.findByIdAndUpdate(id, req.body,{
                new: true
            });
            res.status(StatusCodes.OK).json(newUser);
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        }    
    }

    static deleteUser = async(req, res) => {
        try{
            const {id} = req.params
            await users.findByIdAndDelete(id);
            res.status(StatusCodes.OK).json({message: "user deleted successfully"});
        } catch(error){
            res.status(StatusCodes.OK);
        }
    }

}

export default UserController;