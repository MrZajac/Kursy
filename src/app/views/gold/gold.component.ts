import { Component, OnInit } from '@angular/core';
import { GoldService } from './../../services/gold-service'
@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  public test;
  public table;
  constructor(
    public goldService: GoldService
  ) { }

  public daysCount: number = 30

  ngOnInit() {
    this.goldService.getGold().subscribe(response => {
      console.log(response)
      if (response.ok) {
        this.test = response.json();
        console.log(this.test);
      }
    });
  }
  updateTable(param: number) {
    (param <1) ? param = 1 : param;
    (param >100) ? param = 100 : param;
    this.goldService.getGoldDays(param).subscribe(response => {
      if (response.ok) {
        this.test = response.json();
        this.table = response.json()[0].rates;
        console.log(this.test);
      }
    });
  }
 
}
