import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { Storage } from "@ionic/storage";
import { DatePipe } from "@angular/common";
import { PopoverController } from "@ionic/angular";
import {
  CashFlow,
  CashService,
  Transaction,
} from "src/app/services/cash.service";
import { FilterDatePopoverPage } from "../pages/filter-date-popover/filter-date-popover.page";
@Component({
  selector: "app-stats",
  templateUrl: "./stats.page.html",
  styleUrls: ["./stats.page.scss"],
})
export class StatsPage implements OnInit {
  @ViewChild("doughnutChart") doughnutChart;
  @ViewChild("barChart") barChart;
  @ViewChild("barChartDate") barChartDate;
  bars: any;
  bars2: any;
  doubleBar: any;
  doughnut: any;
  colorArray: any;
  selectedCurrency = "";
  transactionsByCategory: any[] = [];
  transactionsByDate: any[] = [];
  _transactions: any[] = [];
  transactions: Transaction[] = [];
  allTransactions: Transaction[] = [];
  categoriesExpense: any = [];
  categorieIncome: any = [];
  categories: any = [];
  valuesExpense: any = [];
  valuesIncome: any = [];
  values: any = [];
  dates: any = [];
  colors: any = [];
  valueExpensePerDate: any = [];
  valueIncomePerDate: any = [];
  chartData: any[] = [];
  constructor(
    private cashService: CashService,
    private storage: Storage,
    public datepipe: DatePipe,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}
  async ionViewDidEnter() {
    await this.loadTransactions();
    
  }
  async loadTransactions() {
    await this.storage.get("selected-currency").then((currency) => {
      this.selectedCurrency = currency.toUpperCase();
    });
    await this.cashService.getTransactions().then((trans) => {
      this.transactions = trans;
      this.allTransactions = trans;
    });
    await this.loadData();
  }
  groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {})
 }
 
  async loadData(reload?){
    let lastInsertedDate: any = "";
    this.dates = [];
    this.categoriesExpense = [];
    this.valuesExpense = [];
    this.valuesIncome = [];
    this.transactionsByCategory = [];
    this.transactionsByDate = [];
    this._transactions = [];
    this.colors = [];
    this.valueExpensePerDate = [];
    this.valueIncomePerDate = [];
    await this.transactions.forEach((element) => {

      this._transactions.push({category: element.category.name,value: element.value, date: this.datepipe.transform(element.created_at, "MMM d, y"), color: element.category.color});

    });
    this._transactions = this._transactions.sort((a, b) => (a.date > b.date) ? 1 : -1)
    this.transactionsByCategory = (this.groupByKey(this._transactions,'category'));
    this.transactionsByDate = (this.groupByKey(this._transactions,'date'));
    // console.log(this.transactionsByCategory);
    for (let key in this.transactionsByCategory) {
      if(key){
        let value = this.transactionsByCategory[key];
        let val = 0;
        let color = "";
        value.forEach((el) => {
          val += el.value;
          color = el.color;
        });
        this.colors.push(color);
        this.categories.push(key);
        this.values.push(val);
        if (key != "Income") {
          this.valuesExpense.push(val);
          this.categoriesExpense.push(key);
          this.valuesIncome.push(0);
        } else {
          this.categoriesExpense.push('');
          this.valuesExpense.push(0);
          this.valuesIncome.push(val);
        }
      }
        
    }
    for (let key in this.transactionsByDate) {
        let value = this.transactionsByDate[key];
        let valE = 0;
        let valI = 0;
        value.forEach((el) => {
          if(el.category != "Income") valE += el.value;
          else valI += el.value;
        });
        this.dates.push(key);
        this.valueExpensePerDate.push(valE);
        this.valueIncomePerDate.push(valI);
    }

    this.createChart(reload);
  }
  createChart(reload) {
  
    let _doughnutChart = this.doughnutChart.nativeElement;
    if(!reload)
    _doughnutChart.height = 400;
    this.doughnut = new Chart(_doughnutChart, {
      type: "doughnut",
      data: {
        labels: this.categoriesExpense,
        datasets: [
          {
            label: "# " + this.selectedCurrency,
            data: this.valuesExpense,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors,
          },
        ],
      },
    });
    // let _barChart = this.barChart.nativeElement;
    // if(!reload)
    // _barChart.height = 300;
    // this.doubleBar = new Chart(_barChart, {
    //   type: 'bar',
    //   data: {
    //     labels: this.categories,
    //     datasets: [{
    //       label: "Expense",
    //       data: this.valuesExpense,
    //       backgroundColor: 'rgb(255, 0, 0, 0.5)', // array should have same number of elements as number of dataset
    //       borderColor: 'rgb(255, 0, 0)',// array should have same number of elements as number of dataset
    //       borderWidth: 1
    //     },{
    //       label: "Income",
    //       data: this.valuesIncome,
    //       backgroundColor: 'rgb(0, 255, 0, 0.5)', // array should have same number of elements as number of dataset
    //       borderColor: 'rgb(0, 255, 0)',// array should have same number of elements as number of dataset
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });
    let _barChartDate = this.barChartDate.nativeElement;
    if(!reload)
    _barChartDate.height = 300;
    this.bars2 = new Chart(_barChartDate, {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [{
          label: "Expense",
          data: this.valueExpensePerDate,
          backgroundColor: 'rgb(255, 0, 0, 0.5)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(255, 0, 0)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },{
          label: "Income",
          data: this.valueIncomePerDate,
          backgroundColor: 'rgb(0, 255, 0, 0.5)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(0, 255, 0)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  async openFilter(e) {
    const popover = await this.popoverCtrl.create({
      component: FilterDatePopoverPage,
      event: e,
    });

    await popover.present();

    popover.onDidDismiss().then((res) => {
      if (res && res.data) {
        let all = res.data.all;
        if (all) {
          this.transactions = this.allTransactions;
        } else {
          this.transactions = this.allTransactions.filter(entry => {
            const date = new Date(entry.created_at).toDateString();
            
            return date >= new Date(res.data.start_date).toDateString() && date <= new Date(res.data.end_date).toDateString()
          })
          
        }
        this.loadData(true);
      }
    });
  }
}
