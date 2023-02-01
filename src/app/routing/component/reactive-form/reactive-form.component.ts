import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent {
  public formData: FormGroup = new FormGroup ({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  public onSubmit() {
  //  console.log('submit form: formData = ' + this.formData.value);
   this.common.submidData({name: this.formData.value});
  }

  constructor(private common: CommonService) {}

  ngOnInit(): void {}
}
