import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO, GetBandInputDTO } from "../model/Band";
import { Request, Response} from "express";

const bandBusiness = new BandBusiness()

export class BandController {

    public signBand = async (req:Request,res:Response)=>{
        try {

            const { name, mainGenre, responsibleUser } = req.body
            const token = req.headers.authorization as string

            const input: BandInputDTO = {
                name,
                mainGenre,
                responsibleUser,
                token
            }
            
            await bandBusiness.signBand(input)

            res.send("Banda Registrada com sucesso!")

        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public getBand = async (req:Request,res:Response)=>{
        try{
            const input: GetBandInputDTO = {
                id: req.params.id,
                token: req.headers.authorization as string
            }
            const band = await bandBusiness.getBand(input)

            res.send(band)

        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}