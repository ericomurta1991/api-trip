import { reservations } from "../model/index.js";
import { StatusCodes } from "http-status-codes";

class ReserveController {

    static showReservations = async(req, res) => {
        try{
            const reservationsResult = await reservations.find()
            .populate("id_user", "name")
            .populate("id_destiny", "name description")
            
            res.status(StatusCodes.OK).json(reservationsResult);
            
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
        }
    }

    static showReserveForId =  async(req, res) => {
        try{
            const {id} = req.params;
            const reserveForId = await reservations.findById(id)
            .populate("id_user", "name")
            .populate("id_destiny", "name description")

            res.status(StatusCodes.OK).json(reserveForId)
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
        }    
    }

    static registerReserve = async(req, res) => {
        try{
            let reserve = new reservations(req.body);
            await reserve.save();
            res.status(StatusCodes.CREATED).send(reserve.toJSON());
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }

    }

    static updateReserve = async(req, res) => {
        try{
            const {id} = req.params;
            const newReserve = req.params;
            await reservations.findByIdAndUpdate(id)
            res.status(StatusCodes.Ok).json(newReserve);
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
        }
    }

    static deleteReserve = async(req, res) => {
        try{
            const {id} = req.params;
            await reservations.findByIdAndDelete(id);
            res.status(StatusCodes.OK).json({message: "Booking removed successfully"})
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }
}

export default ReserveController;