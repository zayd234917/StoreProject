import { Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Catalog } from './catalog/catalog';
import { ProductDetails } from './product-details/product-details';
import { Cart } from './cart/cart';
import { Register } from './register/register';
import { Home } from './home/home';

export const routes: Routes = [
      {path: 'signin',component:Signin},
      {path:'catalog',redirectTo:'catalog/all'},
      {path: 'catalog/:category',component:Catalog},
      {path:'product-details',component:ProductDetails},
      {path:'cart',component:Cart},
      {path: '',component: Home},
      {path:'register',component:Register}
];
