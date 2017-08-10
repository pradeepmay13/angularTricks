import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-datatable2',
  templateUrl: './datatable2.component.html',
  styleUrls: ['./datatable2.component.css']
})
export class Datatable2Component implements OnInit {
	//dtOptions: DataTables.Settings = {};
  	//persons: Person[] = [];
  	//dtTrigger: Subject = new Subject();
	//constructor(private http: Http) { }

	ngOnInit() {
		//this.dtOptions = {paginationType: 'full_numbers', displayLength: 2};
		//this.http.get('data/data.json')
		//.map(this.extractData)
		//.subscribe(persons=>{
		//	this.persons = persons;
			// Calling the DT trigger to manually render the table
        //	this.dtTrigger.next();
		//})
	//}
	//private extractData(res: Response) {
	//    const body = res.json();
	//    return body.data || {};
  	}

}
