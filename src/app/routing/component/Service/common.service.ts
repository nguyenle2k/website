import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;
   
  
  constructor() { }
  
  public binhPhuong(n: number): number {
    return n * n;
  }

  public submidData(data: any): void {
    console.log('Send data to server. Data = ', data);
  }
}

