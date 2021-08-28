import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {
  details:any

  constructor( public ds: DataserviceService, private router:Router ) {
    this.details=this.ds.register
    console.log(this.details);
   }
   
  ngOnInit(): void {
  }

}
