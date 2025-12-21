import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../models/Product';
import { Prservice } from '../prservice';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-product-details',
  imports: [ FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit  {
     private product! : Product;
     
     public get getProduct() : Product {
      return this.product;
     }   
     constructor(private serve : Prservice,private router : Router){}
      ngOnInit(): void {
       this.product = this.serve.getSelect(); 
      }
      getImage(){
        return  this.getProduct.productImage;
      }
       buy(product : Product){
       this.serve.creatCartItem(product);
    }
    goToSignCatalog(){
      this.router.navigate(['/catalog/all'])
    }
       
     
}
