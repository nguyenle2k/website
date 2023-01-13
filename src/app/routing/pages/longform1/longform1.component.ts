import { Component } from '@angular/core';

@Component({
  selector: 'app-longform1',
  templateUrl: './longform1.component.html',
  styleUrls: ['./longform1.component.less']
})
export class Longform1Component {

  titles =[
    {title:'Number'},
    {title:'Nation'},
    {title:'Capital'},
    {title:'Population (people)'},
    {title:'GDP (USD)'},
  ]

  items =[
    {
      nation:'China',
      capital:'"Pecking"', 
      population:'21,333,000',
      gdp:'1,935.2',
    },
    {
      nation:'Indonesia',
      capital:'Jakarta',
      population:'',
      gdp:'',
    },
    {
      nation:'Singapore',
      capital:'Singapore',
      population:'',
      gdp:'',
    },
    {
      nation:'Sound-Korea',
      capital:'Seun',
      population:'',
      gdp:'',
    },
    {
      nation:'Sound-Korea',
      capital:'Seun',
      population:'',
      gdp:'',
    },
    {
      nation:'Sound-Korea',
      capital:'Seun',
      population:'',
      gdp:'',
    },
    {
      nation:'Sound-Korea',
      capital:'Seun',
      population:'',
      gdp:'',
    },
  ]
}
