import { Component, inject, NgModule, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink ,RouterOutlet} from '@angular/router';
import { Product } from '../../models/Product';
import { Prservice } from '../prservice';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-catalog',
  imports: [RouterLink, FormsModule, CommonModule, RouterOutlet],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit{
  filteredProducts : Product[] = [];
  router = inject(Router);
  
  constructor(private serve : Prservice,private route : ActivatedRoute){}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        const category = params.get('category');
        this.filteredProducts = this.serve.getFiltredProducts(category);
      })
    }
    getImage(product : Product){
      return  product.productImage ;
      console.log(product.productImage);
    }
    goTodetails(product : Product){
      this.serve.setSelect(product);
      this.router.navigate(['/product-details']);
    }
    buy(product : Product){
       this.serve.creatCartItem(product);
       Swal.fire('Success','Your Item added to the Cart','success');
    }
    
  
  }





