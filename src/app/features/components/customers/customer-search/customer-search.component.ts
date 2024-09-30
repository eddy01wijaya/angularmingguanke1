import { Component } from '@angular/core';
import { CustomerService } from '../../../../cores/services/customer.service';
import { ICustomer } from '../../../../cores/interfaces/reservasi_api/i-customer';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPagination } from '../../../../cores/interfaces/reservasi_api/i-pagination';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrl: './customer-search.component.css',
})
export class CustomerSearchComponent {
  page = 1;
  query: string = '';
  field: string = 'name';
  icons = {
    search: faSearch,
  };
  constructor(private customerService: CustomerService) {}

  onSearch() {
    console.log(this.query);
    this.page = 1;
    this.customerService
      .all(this.page, this.query)
      .subscribe((resp: IPagination<ICustomer[]>) => {
        this.customerService.customers = resp;
      });
  }
}
