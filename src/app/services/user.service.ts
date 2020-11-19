import { Injectable } from '@angular/core';

interface UserI {
  name: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserI = {
    name: "Pabhoz",
    email: "pabhoz@tales.sisas"
  }
  constructor() { }
}
