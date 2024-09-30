import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/reservasi_api/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';
import { IPagination } from '../../../../cores/interfaces/reservasi_api/i-pagination';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent implements OnInit {
  page: number = 1;
  query: string = '';
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.all().subscribe((resp: IPagination<ICustomer[]>) => {
      this.customerService.customers = resp;
    });
  }

  get customers(): IPagination<ICustomer[]> {
    return this.customerService.customers;
  }

  onPaginateReservation(data: number) {
    console.log(typeof data);
    this.customerService
      .all(data, this.query)
      .subscribe((resp: IPagination<ICustomer[]>) => {
        this.customerService.customers = resp;
      });
  }
}
