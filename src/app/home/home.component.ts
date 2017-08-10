import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	userDetails:any;
  	constructor(
		private toastr: ToastsManager, 
		private _vcr: ViewContainerRef, 
		private _notificationsService: NotificationsService,
	) {
    	this.toastr.setRootViewContainerRef(_vcr);

    	this.toastr.onClickToast()
    	.subscribe( toast => { 
    		alert('toaster clicked.');      
    		 this.toastr.dismissToast(toast);    
	        console.log(toast.data);
	    });
	    const data = JSON.parse(localStorage.getItem('userData'));
  		this.userDetails = data;
  		console.log(this.userDetails);

	}

	private showSuccess(){		
    	this.toastr.success("Success", 'You are on right track.');
	}

	private showError(){		
    	this.toastr.error("Error", 'This very Rear.');
	}

	private showWarning(){		
    	this.toastr.warning("Warning", 'This is Warning.');
	}

	private showInfo(){		
    	this.toastr.info("Info", 'This vinformation is only for you.');
	}

	private showCustom(){
		this.toastr.custom(`
			<div class='row' style="padding:10px;">
				<div class='col-md-6' style='background:rgba(2, 2, 2, 0.4);height:100px;'>
					<span>Message.</span>
				</div>
				<div class='col-md-6' style='background:#d2d2d2;height:100px;'>
					<span>Message</span>
				</div>
			</div>`, null, {enableHTML: true});
	}

	private controlledNotification(){
		this.toastr.success('You are awesome!', 'Success!', {dismiss: 'controlled'})
	        .then((toast) => {
	            	// DO some stuff here
	            	// and based on the condition dismiss the toast
	                this.toastr.dismissToast(toast);
	        });
	}

	private onClickToast(){
		this.toastr.success('You are awesome! Click to view details.', 'Success!', {data: {url: '/path/to/successUrl'}});
	}

  	//============================== Notification =====================  


	public options = {
		position: ["top", "right"],
		timeOut: 0,
		lastOnBottom: true,
  	};
	showMsg(){
	    this._notificationsService.error(
		    'Success',
		    'Saved Successfully',
		    {
		        timeOut: 5000,
		        showProgressBar: true,
		        pauseOnHover: false,
		        clickToClose: false,
		        maxLength: 10,
		    }
		)
  	}
  ngOnInit() {
  }

}
