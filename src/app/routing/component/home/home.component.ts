import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  public name = 'Nguyen';
  public age = 20;
  public fruits = ['apple','pine apple','durian','fourty-five kilogram chick', 'kumquat']
  public fruits2 = [
    {name: 'Apple', price: 12, discount: false},
    {name: 'Pine Apple', price: 7, discount: false},
    {name: 'Durian', price: 20, discount: false},
    {name: 'Kumquat', price: -10, discount: true},
  ]
  // public resetName(): void {
  //   console.log('resetName');
  //   this.name = '';
  // }  
  // public resetAge(): void {
  //   console.log('resetAge');
  //   this.age = 0;
  // }

  public districts: string[] = ['Thành phố / Huyện:'];
  public cities = [
    {
      city:'Chọn thành phố',
      district:[]
    },
    {
      city:'An Giang', 
      district:[
        "Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"
      ]
    },
    {
      city:'Bà Rịa - Vũng Tàu', 
      district:[
        "Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"
      ]
    },
    {
      city:'Bạc Liêu', 
      district:[
        "Thành phố Bạc Liêu","Huyện Đông Hải","Huyện Giá Rai","Huyện Hòa Bình","Huyện Hồng Dân","Huyện Phước Long","Huyện Vĩnh Lợi"
      ]
    },
  ]
  public counter = 0
  public counterBinhPhuong = 0

  constructor(private common: CommonService) {}

  // public ngOnInit(): void {
  //   console.log('fruits2 = ', this.fruits2);
  // }

  public changeCity(event: any): void {
    const city = event?.target.value;
    if (!city) {
      return;
    }

    // Cach 1:
    // const search = this.cities.filter(data => data.city === city)
    // console.log('search', search)
    // if (search && search.length > 0) {
    //   this.districts = search[0].district
    // }

    // Cach 2:
    this.districts = this.cities.find(data => data.city === city)?.district || [];
  } 

  public ngOnInit(): void {
    console.log('PlaceholderComponent ngOnInit = ', this.common.counter);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
}
