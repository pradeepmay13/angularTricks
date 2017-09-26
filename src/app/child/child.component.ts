import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

	@Input('myAwesomeValue') myBadValue:any=101 ;
	@Output() myOutputValue= new EventEmitter();
	constructor() { }

  	ngOnInit() {
  		console.log(this.myBadValue);
  		this.myOutputValue.emit('hello this mess from child to parent=101');
  	}

}
