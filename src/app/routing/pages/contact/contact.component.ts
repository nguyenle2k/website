import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../../component/Service/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
    public contactData = new FormGroup({
      contact: new FormControl(''),
      idea: new FormControl(''),

    });

    constructor (private common: CommonService) {}

    public updateContact () {
      this.common.submidData({contac: this.contactData.value});
    }
  }
