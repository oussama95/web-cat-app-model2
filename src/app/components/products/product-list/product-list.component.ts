import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionTypes} from "../../../state/product.state";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productsInput$:Observable<AppDataState<Product[]>>|null=null;
  @Output() productListEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();

  DataStateEnum=DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

  onActionEvent($event: ActionEvent) {
    this.productListEventEmitter.emit($event);
  }
}
