import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.less']
})
export class TemplateDrivenFormComponent {

  constructor(private common: CommonService) {}

  public name ='';
  public submitForm(): void {
    // console.log('submit form: name = ' + this.name)
    this.common.submidData({name: this.name, age:10});
  }
}
