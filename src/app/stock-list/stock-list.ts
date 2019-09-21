import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.html',
  styleUrls: ['./stock-list.scss']
})
export class StockListComponent implements OnInit {
  searchText: string = '';

  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [StockListComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [StockListComponent],
})
export class StockListModule { }
