import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.html',
  styleUrls: ['./stock-card.scss']
})
export class StockCardComponent implements OnInit {
  searchText: string = '';
  loss: boolean = false;

  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [StockCardComponent],
  imports: [CommonModule],
  exports: [StockCardComponent],
})
export class StockCardModule { }
