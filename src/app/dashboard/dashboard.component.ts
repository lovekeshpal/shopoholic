import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  
  items:any;
  constructor(private ds : DataService){}

  ngOnInit(){
    this.ds.getdata().subscribe(
      (items)=>{
        this.items= JSON.stringify(items);
        console.log("data is this", this.items)
      }
    )
  }

}
