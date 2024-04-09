import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Color Mixer';
  version = 'v0';
  red:number=0;
  green:number=0;
  blue:number=0;
  hexColor:string="#000000";

  mixColor():void {

    [this.red, this.green, this.blue].forEach(function(val, ind, arr) {
        if(val > 255) {
           arr[ind] = 255;
        } else if (val < 0) {
          arr[ind] = 0;
        }
    } );

    var r = this.red.toString(16).padStart(2, '0');
    var g = this.green.toString(16).padStart(2, '0');
    var b = this.blue.toString(16).padStart(2, '0');
    this.hexColor = '#' + r + g + b;
  }

}
