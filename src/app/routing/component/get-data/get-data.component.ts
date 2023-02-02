import { Component } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.less']
})
export class GetDataComponent {

  public info: string ='';

  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    this.httpServerService.getComments('profile').subscribe(data => {
      console.log('data', data)
    })

    this.httpServerService.getRandomUser(3).subscribe(data => {
      console.log('user', data.results)
    })
  }
}
