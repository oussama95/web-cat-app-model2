import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionTypes} from "../../../state/product.state";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productEventEmitter.emit({type:ProductActionTypes.GET_ALL_PRODUCTS,payload:null});
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({type:ProductActionTypes.GET_SELECTED_PRODUCTS,payload:null});
  }

  onGetAvailableProducts() {
    this.productEventEmitter.emit({type:ProductActionTypes.GET_AVAILABLE_PRODUCTS,payload:null});
  }

  onNewProduct() {
    this.productEventEmitter.emit({type:ProductActionTypes.NEW_PRODUCT,payload:null});
  }

  onSearch(value: any) {
    this.productEventEmitter.emit({type:ProductActionTypes.SEARCH_PRODUCTS,payload:value});
  }
}
