import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor( private ds: DataserviceService ) {
    this.ds.showDetails
   }

  ngOnInit(): void {
  }

}
