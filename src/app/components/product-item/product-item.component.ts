import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  amount: number = 1;
  arrNumber: number[] =[1,2,3,4,5,6,7,8,9,10];
  @Input() product: Product;
  @Output() added = new EventEmitter;

  constructor( private cartService: CartService) {
    this.product = {
      name: "",
      price: 1.0,
      url: "",
      description: "",
      amount: 0
    }
  }

  onSubmit(p: Product): void {
    p.amount = this.amount;
    this.cartService.addToProcarts(p);
  }

}
