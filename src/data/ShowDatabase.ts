import { Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";


export class ShowDatabase extends BaseDatabase {

    private static TABLE_NAME = "Shows_Tabela"

    public signShow = async ( show:Show ) => {
        try {
            await this.getConnection()
            .insert({id:show.id,weekday:show.weekday,start_time:show.startHour,end_time:show.endHour,band_id:show.bandId})
            .into(ShowDatabase.TABLE_NAME);
        } catch (error:any) {
            throw new Error (error.sqlMessage||error.message);
        }
    }

    public getAllShowsOnDate = async ( weekEnd:string) => {
        try {
            const result = await this.getConnection()
            .innerJoin({ B: "Bandas_Tabela"}, "S.band_id", "B.id")
            .select ( "B.name", "B.music_genre")
            .where ( "S.week_day", weekEnd)
            .orderBy( "S.start_time", "asc");

            return result
        } catch (error:any) {
            throw new Error (error.sqlMessage||error.message);
        }
    }
}   