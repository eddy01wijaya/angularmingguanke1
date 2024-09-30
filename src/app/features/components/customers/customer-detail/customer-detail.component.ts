import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/reservasi_api/i-customer';
import { ReservasiService } from '../../../../cores/services/reservasi.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css',
})
export class CustomerDetailComponent {
  @Input() customer!: ICustomer;
  @Input() showButtons: boolean = true;

  constructor(private reservasiService: ReservasiService) {}

  customerReservasi() {
    this.reservasiService.customer = this.customer;
  }
}
