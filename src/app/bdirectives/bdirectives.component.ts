import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISimpleProduct } from '../task_crud/interface/itask';

@Component({
  selector: 'app-bdirectives',
  templateUrl: './bdirectives.component.html',
  styleUrl: './bdirectives.component.css'
})
export class BdirectivesComponent {
  @Input() child_totalCount: number = 9;
  @Input() product!: ISimpleProduct;

  @Output() emit: EventEmitter<number> = new EventEmitter();

  up() {
    this.child_totalCount++;
    this.emit.emit(this.child_totalCount);
  }

  down() {
    this.child_totalCount--;
    this.emit.emit(this.child_totalCount);
  }
}
