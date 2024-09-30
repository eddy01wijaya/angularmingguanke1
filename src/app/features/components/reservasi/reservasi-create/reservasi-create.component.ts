import { Component } from '@angular/core';
import { IReservasi } from '../../../../cores/interfaces/reservasi_api/i-reservasi';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { Reservasi } from '../../../../cores/models/reservasi';

@Component({
  selector: 'app-reservasi-create',
  templateUrl: './reservasi-create.component.html',
  styleUrl: './reservasi-create.component.css',
})
export class ReservasiCreateComponent {
  time = { hour: 13, minute: 30 };

  constructor(private reservasiService: ReservasiService) {}

  get reservasi() {
    return this.reservasiService.reservasi;
  }

  set reservasi(data: IReservasi) {
    this.reservasiService.reservasi = data;
  }

  onCreate() {
    this.reservasiService.create(this.time).subscribe((resp: IReservasi) => {
      console.log(resp);
    });
  }

  onGetReservation(data: IReservasi) {
    this.reservasiService.reservasi = data;
  }

  onUpdate() {}

  whenReservationValid(timestamp: number) {
    let dateNow: number = Date.parse(new Date().toISOString().split('T')[0]);
    let reservationSchedule: number = Date.parse(
      new Date(timestamp).toISOString().split('T')[0]
    );

    if (reservationSchedule > dateNow) {
      return true;
    }

    return false;
  }

  onRemove() {
    this.reservasiService.remove(this.reservasi.id).subscribe((resp: any) => {
      this.reservasiService.reservasi = new Reservasi();
    });
  }
}
