import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ProvaService {

  user: User = {
    name : "nome",
    surname : "",
    operation: ""
  }

  constructor() { }

  getAll(): User{
    return this.user;
  }
}
