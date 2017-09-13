import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
	@ViewChild('myinputtext') inputText;
	//constructor() { setInterval(()=>{this.send2server()},2000)}

	ngOnInit() {
	}

	send2server() {
		let data=	this.inputText.nativeElement;
		console.log(data.value);
	}

}
