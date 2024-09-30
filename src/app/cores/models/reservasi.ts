import { ICustomer } from "../interfaces/reservasi_api/i-customer";
import { IReservasi } from "../interfaces/reservasi_api/i-reservasi";

export class Reservasi implements IReservasi {
    id: string = '';
    customer!: ICustomer;
    nomorKontrak: string = '';
    nomorBPKB: string = '';
    tipeKendaraan = '';
    jadwal: number = 0;
    real: number = 0;
    estimasi: number = 0;

  }