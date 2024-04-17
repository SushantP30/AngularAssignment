import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
 products:any[]=[];
 constructor(){
  this.products=[
    {productid:'101',productname:'iphone',price:'100000',catagory:'mobile',expdate:'24-02-2089',manifacturer:'Apple'},
    {productid:'102',productname:'Washing Machine',price:'200000',catagory:'Home Appliences',expdate:'26-02-2079',manifacturer:'Samsung'},
    {productid:'103',productname:'Tv',price:'70000',catagory:'LcdTv',expdate:'24-02-2045',manifacturer:'Onida'},
    {productid:'104',productname:'Bike',price:'100000',catagory:'Twowheelar',expdate:'24-02-2059',manifacturer:'Honda'},
    {productid:'105',productname:'HondaAmaze',price:'100000',catagory:'Vehical',expdate:'24-02-2079',manifacturer:'Honda'},
    {productid:'106',productname:'Honda City',price:'7770000',catagory:'vehical',expdate:'24-02-2029',manifacturer:'Honda'},
    {productid:'107',productname:'Punch',price:'100000',catagory:'Vehical',expdate:'24-02-2019',manifacturer:'Tata'},
    {productid:'108',productname:'Electric Bus',price:'100000',catagory:'Vehical',expdate:'24-02-2059',manifacturer:'Tata'},
    {productid:'109',productname:'E63',price:'100000',catagory:'mobile',expdate:'24-02-2089',manifacturer:'Nokia'},
    {productid:'110',productname:'AirBus',price:'88800000',catagory:'Airoplane',expdate:'24-02-2089',manifacturer:'Airbus'}
  ]
 }
 getLatestData(){
  this.products=[
    {productid:'101',productname:'iphone',price:'100000',catagory:'mobile',expdate:'24-02-2089',manifacturer:'Apple'},
    {productid:'102',productname:'Washing Machine',price:'200000',catagory:'Home Appliences',expdate:'26-02-2079',manifacturer:'Samsung'},
    {productid:'103',productname:'Tv',price:'70000',catagory:'LcdTv',expdate:'24-02-2045',manifacturer:'Onida'},
    {productid:'104',productname:'Bike',price:'100000',catagory:'Twowheelar',expdate:'24-02-2059',manifacturer:'Honda'},
    {productid:'105',productname:'HondaAmaze',price:'100000',catagory:'Vehical',expdate:'24-02-2079',manifacturer:'Honda'},
    {productid:'106',productname:'Honda City',price:'7770000',catagory:'vehical',expdate:'24-02-2029',manifacturer:'Honda'},
    {productid:'107',productname:'Punch',price:'100000',catagory:'Vehical',expdate:'24-02-2019',manifacturer:'Tata'},
    {productid:'108',productname:'Electric Bus',price:'100000',catagory:'Vehical',expdate:'24-02-2059',manifacturer:'Tata'},
    {productid:'109',productname:'E63',price:'100000',catagory:'mobile',expdate:'24-02-2089',manifacturer:'Nokia'},
    {productid:'110',productname:'AirBus',price:'88800000',catagory:'Airoplane',expdate:'24-02-2089',manifacturer:'Airbus'},
    {productid:'111',productname:'Ertiga',price:'700000',catagory:'car',expdate:'24-02-2089',manifacturer:'Mahindra'},
    {productid:'112',productname:'car',price:'88800000',catagory:'car',expdate:'24-02-2089',manifacturer:'Tata'}
  ]
 }

}
