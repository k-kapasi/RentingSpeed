import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { end, start } from '@popperjs/core';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-bicycle-info',
  templateUrl: './bicycle-info.component.html',
  styleUrls: ['./bicycle-info.component.css']
})
export class BicycleInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectDate = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year,month, 16)),
     
  })
  // getDays(start: Date, end: Date):number{
  //   const days = 24 * 60 * 60 * 1000;
  //   return Math.round(Math.abs(Number(end)- Number(start))/days);
  calculateDiff(end: string | number | Date){
    let start = new Date();
    end = new Date(end);

    return Math.floor((Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) - Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) ) /(1000 * 60 * 60 * 24));
}
 range = new FormGroup({
   start: new FormControl(),
   end: new FormControl() ,

  
 });
   

  }

