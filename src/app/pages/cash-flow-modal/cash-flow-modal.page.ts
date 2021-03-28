import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import {
  CashFlow,
  CashService,
  Transaction,
} from "src/app/services/cash.service";

@Component({
  selector: "app-cash-flow-modal",
  templateUrl: "./cash-flow-modal.page.html",
  styleUrls: ["./cash-flow-modal.page.scss"],
})
export class CashFlowModalPage implements OnInit {
  categories = [
    { name: "Food", icon: "fast-food", color: "#FF6737" },
    { name: "Rent", icon: "business", color: "#75D0F9" },
    { name: "Housing", icon: "home", color: "#FFBA55" },
    { name: "Transportation", icon: "bus", color: "#95A8B1" },
    { name: "Vehicle", icon: "car", color: "#BC37FF" },
    { name: "Shopping", icon: "cart", color: "#85E449" },
    { name: "Sports", icon: "fitness", color: "#FF699C" },
    { name: "Health", icon: "medkit", color: "#7A8DFE" },
    { name: "Education", icon: "school", color: "#37CDB8" },
    { name: "Travel", icon: "airplane", color: "#1F7C5B" },
    { name: "Entertainement", icon: "game-controller", color: "#710071" },
    { name: "Other", icon: "ellipsis-horizontal", color: "#000000" },
  ];

  created_at = new Date().toISOString();

  transaction: Transaction = {
    created_at: Date.now(),
    title: "",
    value: 0,
    type: CashFlow.Expense,
    category: this.categories[0],
  };

  constructor(
    private modalCtrl: ModalController,
    private cashService: CashService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  addTransaction() {
    this.transaction.type = +this.transaction.type;
    this.transaction.created_at = new Date(this.created_at).getTime();
    if (this.transaction.type == CashFlow.Income) {
      this.transaction.category = { name: "Income", icon: "cash", color: "#00AA70"};
    }

    this.cashService.addTransaction(this.transaction).then(() => {
      let toast = this.toastCtrl.create({
        message: "Transaction saved",
        duration: 2000,
        color : "success"
      });

      toast.then((toast) => toast.present());
      this.modalCtrl.dismiss({ reload: true });
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
