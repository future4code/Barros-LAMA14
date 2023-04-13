export type Band = {

    id: string,
    name: string,
    mainGenre: string,
    responsibleUser: string

}

export interface BandInputDTO {

    name: string,
    mainGenre: string,
    responsibleUser: string,
    token: string

}

export interface GetBandInputDTO {

    id:string,
    token:string

}