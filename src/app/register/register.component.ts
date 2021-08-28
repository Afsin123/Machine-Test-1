import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname=""
  lastname =""
  email=""
  phone=""

  registerForm = this.fb.group({
    firstname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    lastname:['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['', [Validators.required, Validators.email ] ],

  })

  constructor(private router:Router, private fb:FormBuilder, private ds: DataserviceService) { }

  ngOnInit(): void {
  }

  register() {

    console.log(this.registerForm.get('uname')?.errors);
    
    if (this.registerForm.valid) {
      var firstname = this.registerForm.value.firstname;
      var lastname = this.registerForm.value.lastname;
      var email = this.registerForm.value.email;
      var phone = this.registerForm.value.phone;
      
      // var firstname = this.firstname
      // var lastname = this.lastname
      // var email = this.email
      // var phone = this.phone

      var result = this.ds.register(firstname, lastname,email,phone);
      if (result) {
        alert("Registration Successful!!")
        this.router.navigateByUrl("showdetails") 
      }
      else {
        alert("User already exist!!!! Log in ")
      
      }
    }
    else{
      alert("Invalid Form")
    }
  }
}


     
      

      //var details = this.ds.register(firstname,lastname,email,phone)
      
      // if(details){
      //   console.log(this.ds.register);
      //   alert("Registration Successful..!!")
      //  
      // }
      
      
  

    //   var result = this.ds.register(acno, uname, password);
    //   if (result) {
    //     alert("Registration Successful!!")
    //     this.router.navigateByUrl("")
    //   }
    //   else {
    //     alert("User already exist!!!! Log in ")
    //     this.router.navigateByUrl("")
    //   }

    // }
    // else{
    //   alert("Invalid Form")
    // }
    // alert("Register clicked!!")

  



