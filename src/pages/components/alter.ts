import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
	
	templateUrl: 'components.html'
})

export class AlertPage {

	constructoor(public alertCtrl: AlertController) {
	
	}
	
	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'New Friend!',
			subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
			buttones: ['ok']
		});
		alert.present();
	}
}