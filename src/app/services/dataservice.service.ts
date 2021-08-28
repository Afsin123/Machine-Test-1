import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  uid = 0
  currentuser=""
  currentfname=""
  currentlname=""
  currentemail=""


  user: any = {
    98475: { firstname: "Abin", lastname: "Jose", email: "abin@gmail.com", phone: 98475 },
    97745: { firstname: "Alen", lastname: "Jose", email: "alen@gmail.com", phone: 97745 },
    99999: { firstname: "Arin", lastname: "Josy", email: "arin@gmail.com", phone: 99999 }
  }

  constructor() {
    this.showDetails()
   }
  saveDetails() {
    localStorage.setItem("user", JSON.stringify(this.user))
    if(this.currentuser){
      localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
    }
    if(this.currentfname){
      localStorage.setItem("currentfname",JSON.stringify(this.currentfname))
    }
    if(this.currentlname){
      localStorage.setItem("currentlname",JSON.stringify(this.currentlname))
    }
    if(this.currentemail){
      localStorage.setItem("currentemail",JSON.stringify(this.currentemail))
    }
    //console.log(this.user);
  }

  showDetails() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user") || '')
    
      if(localStorage.getItem("currentuser")){
        this.currentuser=JSON.parse(localStorage.getItem("currentuser")||'')
      }
      if(localStorage.getItem("currentfname")){
        this.currentfname=JSON.parse(localStorage.getItem("currentfname")||'')
      }
      if(localStorage.getItem("currentlname")){
        this.currentlname=JSON.parse(localStorage.getItem("currentlname")||'')
      }
      if(localStorage.getItem("currentemail")){
        this.currentemail=JSON.parse(localStorage.getItem("currentemail")||'')
      }
     // console.log(this.user);
      
    }
  }
  
  register(firstname: string, lastname: any, email: any, phone: any) {

    var details = this.user
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
     //console.log(details[phone]);
     var passon=details[phone];
    }
    this.currentuser=phone
    this.currentfname= firstname
    this.currentlname = lastname
    this.currentemail= email 
    this.saveDetails()
    return true;
  }
  display(){
    return this.user[this.currentuser].phone
    return this.currentfname
    return this.currentlname
    return
    
  }
}
