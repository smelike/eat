import { Component } from '@angular/core';

import { Platform, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	
	templateUrl: 'components.html'
})



export class ComponentsPage {
	
	constructor(public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
		
	}
	
	presentActionSheet() {
		
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Modify your album',
			buttons: [
				
				{
					text: 'Destructive',
					role: 'desctructive',
					handler: () => {
							
						console.log('Destructive clicked');
					}
				
				},{
					text: 'Archive',
					handler: () => {
						console.log('Archived clicked')
					}
				}
			]
		});
		actionSheet.present();
	}
	/*
	showAlert() {
		
		let alert = this.alertCtrl.create({
			
			title: 'New Friend!',
			subTitle: 'Your friend, Obi wan kenbi, just accepted your friend request!',
			buttons: ['ok']
		});
		
		alert.present();
	}
	*/
}