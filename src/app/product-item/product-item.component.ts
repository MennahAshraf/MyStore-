import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import { product } from '../models/product';
import { Router } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() product:product
 @Input() amount:number|undefined
 @Output() showItem:EventEmitter<product>=new EventEmitter
 @Output() change:EventEmitter<number>=new EventEmitter
 @Output() cartProd:EventEmitter<product>=new EventEmitter
 
 

  constructor(private fetchdata:FetchDataService,public _router: Router) {
    this.product={
      name:'',
      price:0,
      description:'',
      id:0,
      url:''
    }
    this.amount=1
   }

  ngOnInit(): void {
    
  }

  onsubmit(product:product,amount:number|undefined){
    this.fetchdata.addtocart(product,amount,true)
    alert('added to cart')
  }

  productPreview(product:product){
    this.showItem.emit(product)
  }

  

  calculateCost(){

   this.change.emit(this.amount) 
   this.cartProd.emit(this.product)
 

}


}
