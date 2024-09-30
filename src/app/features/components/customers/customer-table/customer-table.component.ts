import { Component } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/reservasi_api/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css',
})
export class CustomerTableComponent {}
