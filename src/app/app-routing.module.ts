import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';

const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },
  {
   
    path:'showdetails',component:ShowdetailsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
