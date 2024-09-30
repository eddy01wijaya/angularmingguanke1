import { Directive, ElementRef, Input } from '@angular/core';

interface IDirective {
  color: string;
  background: string;
}

class Director implements IDirective {
  color: string = "";
  background: string = "";
}

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @Input() appAttr: IDirective = new Director();

  constructor(private elemenRef: ElementRef) {}

  ngOnInit(): void {
    this.elemenRef.nativeElement.classList.add(this.appAttr.background);
    this.elemenRef.nativeElement.classList.add(this.appAttr.color);
  }

}
