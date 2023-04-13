export type Show = {
    id: string,
    weekday: WeekEnd,
    startHour: number,
    endHour: number,
    bandId: string
};

export interface ShowInputDTO {
    weekday: WeekEnd,
    startHour: number,
    endHour: number,
    bandId: string,
    token: string
};

export interface GetShowInputDTO {
    weekday: WeekEnd,
    token: string
};

enum WeekEnd {
    SEXTA = "Sexta",
    SABADO = "Sábado",
    DOMINGO = "Domingo"
};