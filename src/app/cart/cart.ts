import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Prservice } from '../prservice';
import { ShoppingCart } from '../../models/ShoppingCart';
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/Product';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { find } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cart = new ShoppingCart();
   empt : boolean = true;
constructor(private serve : Prservice,private router : Router){}
 ngOnInit(): void {
  this.cart = this.serve.getCart;
 }
 removeItem(product : ShoppingCartItem){
  if(product.quantity > 1){
    product.quantity--;
  }else{
  this.serve.getCart.removeItem(product);}
 }
goToCatalog(){
  this.router.navigate(['/catalog/all']);
}
isEmpty(){
   if (this.cart.itemsProduct.length == 0) {
    return true;  
   }else{
    return false;
   } 

}

}
