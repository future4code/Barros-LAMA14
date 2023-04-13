import { BandDatabase } from "../data/BandDatabase";
import { InvalidInput, InvalidToken } from "../error/BaseError";
import { Band, BandInputDTO, GetBandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator";

const authenticator = new Authenticator()
const idgenerator = new IdGenerator()
const banddatabase = new BandDatabase()

export class BandBusiness {

    public signBand = async ( input:BandInputDTO ) => {

        try {

            const { name,mainGenre,responsibleUser,token} = input

            if (!name || !mainGenre || !responsibleUser || !token) {
                throw new InvalidInput()
            }

            const tokenVerify = authenticator.getData(token)

            if (!tokenVerify) {
                throw new InvalidToken()
            }

            const id:string = idgenerator.generate()

            const band: Band = {
                id,
                name,
                mainGenre,
                responsibleUser
            }

            await banddatabase.signBand(band)

        } catch (error:any) {
            throw new Error (error.message || error.mysqlmessage)
        }

    }

    public getBand = async (input:GetBandInputDTO) => {

        try {

            const { id,token } = input

            if (!id || !token) {
                throw new InvalidInput()
            }

            const tokenVerify = authenticator.getData(token)

            if (!tokenVerify) {
                throw new InvalidToken()
            }

            const band = await banddatabase.getBand(id)
            return band

        } catch (error:any) {
            throw new Error (error.message || error.mysqlmessage)
        }
        
    }

}