export class product{
    "id":number;
    "name": string;
    "price": number;
    "url": string;
    "description":string;
    "amount"?:number;
    "detail"?:boolean;
    "isCart"?:boolean
  

    /**
     *
     */
    constructor() {
        this.id=0
        this.name=''
        this.price=0
        this.url=''
        this.description=''
        this.amount=1
        this.detail=false
        this.isCart=false

        
    }
}

