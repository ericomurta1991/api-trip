import{destinations} from "../model/index.js"
import { StatusCodes } from "http-status-codes"

class DestinyController {
    
    static showDestinations = async(req, res) => {
        try{
            const destinationsResult = await destinations.find()
            res.status(StatusCodes.OK).json(destinationsResult)
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }
    
    static showDestinyById = async(req, res) => {
        try{
            const {id} = req.params;
            const destinyById = await destinations.findById(id);
            res.status(StatusCodes.OK).json(destinyById)
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }

    static registerDestiny = async(req,res) => {
        try{
            let destiny = new destinations(req.body)
            await destiny.save();
            res.status(StatusCodes.CREATED).send(destiny.toJSON()) 
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }

    static updateDestiny = async(req, res) => {
        try{
            const {id} = req.params
            const newDestiny = await destinations.findByIdAndUpdate(id, req.body,{
                new: true
            });
            res.status(StatusCodes.OK).json(newDestiny)
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }

    static deleteDestiny = async(req, res) => {
        try{
            const {id} = req.params;
            await destinations.findByIdAndDelete(id)
            res.status(StatusCodes.OK).json({message: "Destiny deleted successfuly"})
        } catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }
}

export default DestinyController;