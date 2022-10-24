import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:product[] =[]
  productDetails:product

  constructor(private fetchdata:FetchDataService) {
    this.productDetails={
      name:'',
      price:0,
      description:'',
      id:0,
      url:''
    }
   }

  ngOnInit(): void {

    this.fetchdata.fetchData().subscribe(res =>
      {
        this.productList=res
        this.productList.forEach(product =>{ 
          product.isCart=false
        product.amount=0})

        console.log(this.productList)
        
      })

  }

  showDetail(product:product){
    
    this.fetchdata.setdetail(product)
 }

  

}
