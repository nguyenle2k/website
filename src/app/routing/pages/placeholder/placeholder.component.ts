import { Component } from '@angular/core';
import { CommonService } from '../../component/Service/common.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.less']
})
export class PlaceholderComponent {
  // public pages = 'home'; (ngSwitch)
  public counter = 0
  public counterBinhPhuong = 0
  public ham(){
    for (let i = 0; i < 5; i++) {
      console.log ("Count:", i);
    }
  }

  constructor(private common: CommonService) {}

  public ngOnInit(): void {
    console.log('HomeComponent ngOnInit = ', this.common.counter);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter)
    this.common.counter++;
  }
}
