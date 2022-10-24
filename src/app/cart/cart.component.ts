import { Component, Input, OnInit } from '@angular/core';
import { confData } from '../models/confData';
import { product } from '../models/product';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:product[]=[]
  
  calctotal:number=0
  cardProd: product = new product;
  totalCost:number=0

  @Input() Name: string='';
  @Input() Address: string='';
  @Input() cardNumber: number=0;

   
  
  
  constructor(private fetchdata:FetchDataService) { 
    
  }

  ngOnInit(): void {

    this.cartItems=this.fetchdata.getCart()
    this.cartItems.forEach(i=>{
      if(i.amount){
        
        this.totalCost=this.totalCost+(i.amount*i.price)
      }
    })
  }

  


showDetail(product:product){
    
  this.fetchdata.setdetail(product)
}

setTotal(total:number){
this.calctotal=total



}

setcardProd(prod:product){

  
  this.cardProd=prod
  if(this.calctotal==0){this.fetchdata.deleteFromCart(this.cardProd)
  this.cartItems=this.fetchdata.getCart()
   alert('This Product Is Deleted')}
  let index:number=this.cartItems.findIndex(item=>item.name==this.cardProd.name)
  console.log(index)
  if(index>=0){this.cartItems[index].amount=this.calctotal}

  let x:number=0

  this.cartItems.forEach(i=>{
    if(i.amount){
      
      x=x+(i.amount*i.price)
    }

    this.totalCost=x


  })
}

onsubmit(){

  let conf:confData={
    name: this.Name,
    address: this.Address,
    credCard: this.cardNumber,
    totalCost: this.totalCost
  }
  this.fetchdata.setConfermation(conf)
  console.log(this.fetchdata.confOrder)
}


}
