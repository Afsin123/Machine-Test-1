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
  displays:any

  constructor( public ds: DataserviceService, private router:Router ) {
    this.displays=this.ds.display()
    console.log(this.displays);
   }
   
  ngOnInit(): void {
  }

}
