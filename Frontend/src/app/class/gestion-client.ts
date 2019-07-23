export class GestionClient {

  constructor(
    public firstName: string,
    public lastName: string,
    public password: string,
    public passwordConfirmation: string,
    public mail: string,
    public birthday: Date,
    public phone: string,
    public numberPermis: string,
    public adressOne: string,
    public adressTwo: string,
    public city: string,
    public postalCode: number,
    public department: string
  ) {}

}

