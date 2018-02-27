import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';


@Component ({
	
	templateUrl: 'alert.html'
})

export class AlertPage {

	constructor(public alertCtrl: AlertController) {
	
	}
	
	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'New Friend',
			subTitle: 'Your Friend, Obi wan Kenodi, just accepted your friend request!',
			buttons: ['ok']
		});
		alert.present();
	}
}

