import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { product } from '../models/product';
import { confData } from '../models/confData';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  cart:product[]=[]
  confOrder: confData = new confData;
  
  showProduct:product={
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  }
  constructor(private http:HttpClient) { }

  fetchData():Observable<product[]>{
    return this.http.get<product[]>('assets/data.json')
  }

  addtocart(product:product,value:number|undefined,isCart:boolean):product[]{

   let  index:number = this.cart.findIndex(cartitem => cartitem.name==product.name)

   

   if(index>-1)
   {
    
        this.cart[index].amount=value
      return this.cart

   }
    else  {

      product.amount=value
      product.isCart=isCart
    this.cart.push(product)
    return this.cart
    }
      
    
  }

  

  getCart(){
    return this.cart
  }

  deleteFromCart(product:product){
    this.cart=this.cart.filter(i=>i.name!=product.name)
    
  }

  setdetail(product:product){
    
    this.showProduct=product
    this.showProduct.detail=true
    
  }

  setConfermation(conf:confData){

    this.confOrder={
      name:conf.name,
      address:conf.address,
      credCard:conf.credCard,
      totalCost:conf.totalCost
    }

  }
}
