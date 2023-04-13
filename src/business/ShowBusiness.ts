import { ShowDatabase } from "../data/ShowDatabase";
import { InvalidInput, InvalidTime, InvalidToken } from "../error/BaseError";
import { GetShowInputDTO, Show, ShowInputDTO } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const showDatabase = new ShowDatabase()
const authenticator = new Authenticator()
const idgenerator = new IdGenerator()

export class ShowBusiness {

    public signShow = async (input: ShowInputDTO) => {
        try{
            const {weekday,startHour,endHour,bandId,token} = input

        if (!weekday||!startHour||!endHour||!bandId||!token) {
            throw new InvalidInput()
        }

        if (startHour < 8 || endHour > 23) {
            throw new InvalidTime()
        }

        const tokenVerify = authenticator.getData(token)

        if (!tokenVerify) {
            throw new InvalidToken()
        }

        const id: string = idgenerator.generate()

        const show:Show = {
            id,
            weekday,
            startHour,
            endHour,
            bandId
        }

        await showDatabase.signShow(show);
    
    } catch (error:any) {
        throw new Error (error.message || error.mysqlmessage)
    }} 

    public getAllShowsOnDate = async (input:GetShowInputDTO) => {
        try {

            const { weekday,token} = input;

            if(!weekday || !token) {
                throw new InvalidInput()
            }

            const tokenVerify = authenticator.getData(token)

            if(!tokenVerify) {
                throw new InvalidToken();
            }

            const shows = await showDatabase.getAllShowsOnDate(weekday)

            return shows;

        } catch (error:any) {
            throw new Error (error.message || error.mysqlmessage)
        }
    }
}