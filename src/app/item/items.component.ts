import { Component, OnInit } from '@angular/core'

import { EventData} from '@nativescript/core'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  value = "";
  i=0;
  constructor() {}

  ngOnInit(): void {
   
  }
  onTap(){
    console.log("Tapped", this.i)
    this.i++;
    this.value=this.i.toString();
  }
 
}
