import { ShowBusiness } from "../business/ShowBusiness"
import { Request, Response } from "express"
import { GetShowInputDTO, ShowInputDTO } from "../model/Show"


const showBusiness = new ShowBusiness()

export class showController {
     
    public signShow = async ( req: Request, res: Response) => {

        try {
            const {weekday,startHour,endHour,bandId} = req.body
        const token = req.headers.authorization as string

        const input: ShowInputDTO = {
            weekday,
            startHour,
            endHour,
            bandId,
            token
        }

        await showBusiness.signShow(input)

        res.send("Show registrado com sucesso!")

        } catch (error:any) {
            throw new Error (error.mysqlmessage || error.message)
        }
    }

    public getAllShowsOnDate = async ( req:Request, res:Response) => {

        try {
            
            const { weekday } = req.body
            const token = req.headers.authorization as string

            const input: GetShowInputDTO = {
                weekday,
                token
            }

            const shows = await showBusiness.getAllShowsOnDate(input)

            res.status(200).send({shows});

        } catch (error:any) {
            throw new Error (error.mysqlmessage || error.message)
        }
    }
}