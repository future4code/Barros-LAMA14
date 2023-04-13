import { Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";


export class ShowDatabase extends BaseDatabase {

    private static TABLE_NAME = "Shows_Tabela"

    public signShow = async ( show:Show ) => {
        try {
            await this.getConnection()
            .insert({id:show.id,week_day:show.weekday,start_time:show.startHour,end_time:show.endHour,band_id:show.bandId})
            .into(ShowDatabase.TABLE_NAME);
        } catch (error:any) {
            throw new Error (error.sqlMessage||error.message);
        }
    }

    public getAllShowsOnDate = async ( weekEnd:string) => {
        try {

            const queryResult = await this.getConnection()
            .select("*")
            .where({week_day: weekEnd})
            .into(ShowDatabase.TABLE_NAME);

            return queryResult

        } catch (error:any) {
            throw new Error (error.sqlMessage||error.message);
        }
    }
}   