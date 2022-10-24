import { Component, OnInit,Input } from '@angular/core';
import { product } from '../models/product';
import { FetchDataService } from '../services/fetch-data.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

   showProduct:product
  amount:number
  check!: boolean|undefined;

  constructor(private fetchData:FetchDataService) {
    this.showProduct={
      name:'',
      price:0,
      description:'',
      id:0,
      url:''
    }
    this.amount=1
    
   }
  
    
   
  ngOnInit(): void {
    this.showProduct=this.fetchData.showProduct
    this.check =this.showProduct.detail

    
  }

  
  
}
