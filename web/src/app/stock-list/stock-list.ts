import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockCardModule } from './stock-card/stock-card';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.html',
  styleUrls: ['./stock-list.scss']
})
export class StockListComponent implements OnInit {
  searchText: string = '';
  stocks: string[] = ['ABBV', 'GTX'];

  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [StockListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StockCardModule,
  ],
  exports: [StockListComponent],
})
export class StockListModule { }
