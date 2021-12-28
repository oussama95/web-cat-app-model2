import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, ProductActionTypes} from "../../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?:Product;
  @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    this.productEventEmitter.emit({type:ProductActionTypes.SELECT_PRODUCT,payload:p});
  }

  onDelete(p: Product) {
    this.productEventEmitter.emit({type:ProductActionTypes.DELETE_PRODUCT,payload:p});
  }

  onEdit(p: Product) {
    this.productEventEmitter.emit({type:ProductActionTypes.EDIT_PRODUCT,payload:p});
  }
}
