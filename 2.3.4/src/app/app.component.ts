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
    //Tarea pendiente, JS no admite pasar valor por referencia 
    if (this.red > 255) {
      this.red = 255;
    } else if (this.red < 0) {
      this.red = 0;
    }
    if (this.green > 255) {
      this.green = 255;
    } else if (this.green < 0) {
      this.green = 0;
    }
    if (this.blue > 255) {
      this.blue = 255;
    } else if (this.blue < 0) {
      this.blue = 0;
    }
    var r = this.red.toString(16).padStart(2, '0');
    var g = this.green.toString(16).padStart(2, '0');
    var b = this.blue.toString(16).padStart(2, '0');
    this.hexColor = '#' + r + g + b;
  }

}
