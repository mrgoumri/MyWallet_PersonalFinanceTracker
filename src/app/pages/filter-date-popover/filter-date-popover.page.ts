import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-filter-date-popover',
  templateUrl: './filter-date-popover.page.html',
  styleUrls: ['./filter-date-popover.page.scss'],
})
export class FilterDatePopoverPage implements OnInit {
  start_date: any;
  end_date: any;
  constructor(private popoverCtrl: PopoverController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  search(){
    if(this.start_date && this.end_date) this.popoverCtrl.dismiss({ all: false, start_date: this.start_date, end_date: this.end_date });
    else {
      let toast = this.toastCtrl.create({
        message: "Please select a date range",
        duration: 2000,
        color: "danger"
      });

      toast.then((toast) => toast.present());
    }
  }
  getAll(){
    this.popoverCtrl.dismiss({ all: true });
  }
  
}
