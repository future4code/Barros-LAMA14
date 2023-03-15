import { Band } from "../model/Band"
import { BaseDatabase } from "./BaseDatabase"


export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "Bandas_Tabela"

    public signBand = async ( band:Band ): Promise<void> => {

        try{
            await this.getConnection()
            .insert({id:band.id,name:band.name,music_genre:band.mainGenre,responsible:band.responsibleUser})
            .into(BandDatabase.TABLE_NAME);
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getBand = async ( id:string ) => {

        try{
            const band = await this.getConnection()
            .select('*')
            .where ({ id })
            .into(BandDatabase.TABLE_NAME);
            return band
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    
    }

}