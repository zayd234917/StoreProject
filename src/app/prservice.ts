import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ShoppingCart } from '../models/ShoppingCart';
import { ShoppingCartItem } from '../models/ShoppingCartItem';
@Injectable({
  providedIn: 'root',
})
export class Prservice {
  private products : Product[] = [
      new Product("ERMM","Iphone 16pro",10000,"phones","iphone16.jpeg"),
      new Product("ERRR","Samsung Tv",5000,"Tv","Tv.jpeg"),
      new Product("ERMN","Hp laptop G400",10000,"laptop","laptop.jpg"),
];
private cart = new ShoppingCart();


// public get getcartItems() : ShoppingCartItem {
//   return this.cartItem; 
// }

public get getCart()  {
  return this.cart;
}

private selected! : Product;
public getSelect() : Product {
  return this.selected;
}

public setSelect(v : Product) {
  this.selected = v;
}

 constructor(){}
  private filtredProducts!: Product[];
 getProducts(){
  return this.products;
 }
 getFiltredProducts(category : String | null) {
       if(category && category != "all"){
        return this.products.filter(p => p.category.toLowerCase() === category.toLowerCase());
       }
       return this.products;
 }
 creatCartItem(product : Product) : void{
  const newItem = new ShoppingCartItem(product);
  this.cart.addItem(newItem); 
} 
 
 
}
