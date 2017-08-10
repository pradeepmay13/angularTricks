import { Component, OnInit } from '@angular/core';
import { MasterdataService } from './masterdata.service';
// http://www.9lessons.info/2017/06/ionic-angular-php-login-restful-api.html
@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
  providers: [MasterdataService]
})
export class CustomFormComponent implements OnInit {
  countries: any;
  states: any;
  country: any;
  _id:any="2";
  constructor(public masterdataService :MasterdataService) {
  	
  }
  ngOnInit() {
  	
  	this.countries = this.masterdataService.getCountries();
    if(this._id && this._id != undefined){      
      this.country = this.countries.filter((countryId) => countryId.id == this._id);
      this.country=this.country[0].id;
      this.countryChange(this._id); // call state in case of country ID is available
    }else {this.countryChange("-1");}
  }
  countryChange(value) {
  	this.states = this.masterdataService.getStates().filter((statesItem) => statesItem.cid === value)
  	// this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
  }

}
