import { Component } from '@angular/core';
import { ISimpleProduct } from './task_crud/interface/itask';
import { UserService } from './cores/services/user.service';
import { IUser } from './cores/interfaces/i-user';
import { ICustomer } from './cores/interfaces/reservasi_api/i-customer';
import { CustomerService } from './cores/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // angka: number = 90;
  // persen: number = 0.321;
  // desimal: number = 3457.17782;
  // harga: number = 120_000;
  // teks: string = 'Halo Angular';

  // tanggal: Date = new Date();
  // timestamp: number = Date.now();
  // tanggalStr: string = 'Fri Sept 20 2024 08:00:00';


  // title = 'todo_task';
  // product: ISimpleProduct = {
  //   title: 'Contoh Product 01',
  //   description: 'Lorem ipsum',
  //   price: 34000,
  //   stock: 20,
  // };
  // totalCount: number = 32;

  // handler(data: number) {
  //   this.totalCount = data;
  //   console.log(this.totalCount)
  // }

  // show: boolean = false;//untuk ngif



}
