import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  uid = 0

  user: any = {
    98475: { firstname: "Abin", lastname: "Jose", email: "abin@gmail.com", phone: 98475 },
    97745: { firstname: "Alen", lastname: "Jose", email: "alen@gmail.com", phone: 97745 },
    99999: { firstname: "Arin", lastname: "Josy", email: "arin@gmail.com", phone: 99999 }
  }

  constructor() { }
  saveDetails() {
    localStorage.setItem("user", JSON.stringify(this.user))
    //console.log(this.user);
  }

  showDetails() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user") || '')
    }
  }


  register(firstname: string, lastname: any, email: any, phone: any) {

    let details = this.user
    //console.log(details);


    if (phone in details) {

      return false;
    }
    else {
      details[phone] = {
        firstname,
        lastname,
        email,
        phone
      }
     console.log(details[phone]);
    

  }
    this.saveDetails()
    return true;
  
}


}
