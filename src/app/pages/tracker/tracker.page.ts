import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonList,
  ModalController,
  Platform,
  PopoverController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import {
  CashFlow,
  CashService,
  Transaction,
} from "src/app/services/cash.service";
import { CashFlowModalPage } from "../cash-flow-modal/cash-flow-modal.page";
import { FilterPopoverPage } from "../filter-popover/filter-popover.page";
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
@Component({
  selector: "app-tracker",
  templateUrl: "./tracker.page.html",
  styleUrls: ["./tracker.page.scss"],
})
export class TrackerPage implements OnInit {
  selectedCurrency = "";
  transactions: Transaction[] = [];
  allTransactions: Transaction[] = [];
  @ViewChild("slidingList") slidingList: IonList;
  cashflow = 0;

  constructor(
    private modalCtrl: ModalController,
    private cashService: CashService,
    private plt: Platform,
    private storage: Storage,
    private popoverCtrl: PopoverController,
    private admobFree: AdMobFree
  ) {
    plt.ready().then(() => {
      this.showAds();
    });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    await this.plt.ready();
    
    this.loadTransactions();
    // this.showAds();
  }

  async addCashflow() {
    let modal = await this.modalCtrl.create({
      component: CashFlowModalPage,
      cssClass: "modalCss",
    });

    modal.present();

    modal.onDidDismiss().then((res) => {
      if (res && res.data) {
        this.loadTransactions();
      }
    });
  }

  async loadTransactions() {
    await this.storage.get("selected-currency").then((currency) => {
      this.selectedCurrency = currency.toUpperCase();
    });
    await this.cashService.getTransactions().then((trans) => {
      this.transactions = trans;
      this.allTransactions = trans;
    });
    this.updateCashflow();
  }

  async removeTransaction(i) {
    this.transactions.splice(i, 1);
    this.cashService.updateTransactions(this.transactions);
    await this.slidingList.closeSlidingItems(); // Small Fix
    this.updateCashflow();
  }

  updateCashflow() {
    let result = 0;
    this.transactions.map((trans) => {
      result += trans.type == CashFlow.Expense ? -trans.value : trans.value;
    });

    this.cashflow = result;
  }

  async openFilter(e) {
    const popover = await this.popoverCtrl.create({
      component: FilterPopoverPage,
      event: e,
    });

    await popover.present();

    popover.onDidDismiss().then((res) => {
      if (res && res.data) {
        let selectedName = res.data.selected.name;
        if (selectedName == "All") {
          this.transactions = this.allTransactions;
        } else {
          this.transactions = this.allTransactions.filter((trans) => {
            return trans.category.name == selectedName;
          });
        }
      }
    });
  }

  // showAds(){
  //   const bannerConfig: AdMobFreeBannerConfig = {
  //     id: 'ca-app-pub-6991102113091771/6963195105',
  //     // isTesting: true,
  //     autoShow: true
  //    };
  //    this.admobFree.banner.config(bannerConfig);
     
  //    this.admobFree.banner.prepare()
  //      .then(() => {
         
  //      })
  //      .catch(e => console.log(e));

  //      const interstitialConfig: AdMobFreeInterstitialConfig = {
  //       id: 'ca-app-pub-6991102113091771/5458541744',
  //       // isTesting: true,
  //       autoShow: true
  //      };
  //      this.admobFree.interstitial.config(interstitialConfig);
  //      this.admobFree.interstitial.prepare();
  //      this.admobFree.interstitial.show();
  // }
  showAds() {
    //Banner
    let bannerConfig: AdMobFreeBannerConfig = {
        
        autoShow: true,
        id: "ca-app-pub-6991102113091771/6963195105"
    };

    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
        this.admobFree.banner.show();
    })//.catch(e => alert("Err banner: "+e.message));

    //Interstitial
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        
         autoShow: true,
         id: "ca-app-pub-6991102113091771/5458541744"
     };

     this.admobFree.interstitial.config(interstitialConfig);

     this.admobFree.interstitial.prepare().then(() => {
         // success
         this.admobFree.interstitial.show();
     })//.catch(e => alert("Err interstitial: "+e.message));
  }
}
