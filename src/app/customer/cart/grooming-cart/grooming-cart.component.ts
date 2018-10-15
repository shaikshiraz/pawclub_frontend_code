import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grooming-cart',
  templateUrl: './grooming-cart.component.html',
  styleUrls: ['./grooming-cart.component.css']
})
export class GroomingCartComponent implements OnInit {
  public myData={};
  constructor(private _groomingcart:CustomerService,private _route:ActivatedRoute) { }

  ngOnInit() {
    const id=this._route.snapshot.queryParamMap.get('id');
    //  console.log(id);
    //  console.log(this._route.snapshot.queryParamMap.getAll('id'));
    //  console.log(this._route.snapshot.queryParamMap.keys);
    //  console.log(id);
   
  
  this._groomingcart.grooming_cart(id)
  .subscribe(
    (data)=>{
   this.myData=data;
   console.log(this.myData);
    }
  )
  }

}
