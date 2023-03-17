export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    };
  };

export class InvalidInput extends BaseError {
  constructor(){
    super("Entrada inválida, verifique os campos.",422)
  };
};

export class InvalidToken extends BaseError {
  constructor(){
    super("Você não possui permissão para realizar essa ação. Faça o Login.",401)
  };
};

export class InvalidTime extends BaseError {
  constructor(){
    super("Horário inválido para marcar um show, insira um valor entre 8h e 23h.",401)
  }
}
