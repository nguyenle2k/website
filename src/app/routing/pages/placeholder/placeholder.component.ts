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

  constructor(private common: CommonService) {}

  ngOninit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter)
    this.common.counter++;
  }
}
