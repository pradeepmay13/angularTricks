import { Component, Input  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    ngOnInit () {
    }
    outputValuefunction(ev){
    	console.log(ev, ': we got value from child')
    }
}
