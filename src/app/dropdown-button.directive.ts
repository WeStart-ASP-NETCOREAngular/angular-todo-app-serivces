import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdownButton]',
})
export class DropdownButtonDirective implements OnInit {
  private wasInsideTheElement = false;
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}
  @HostListener('click') toggleShow() {
    this.isOpen = !this.isOpen;
    this.executeAction();
    this.wasInsideTheElement = true;
  }
  @HostListener('document:click') clickOut(event: Event): void {
    if (!this.wasInsideTheElement) {
      this.isOpen = false;
      this.executeAction();
    }
    this.wasInsideTheElement = false;
  }

  private executeAction(): void {
    let dropDownMenuBtn = this.elRef.nativeElement.querySelector(
      '.dropdown-toggle'
    ) as HTMLButtonElement;
    let dropDownMenuList = this.elRef.nativeElement.querySelector(
      '.dropdown-menu'
    ) as HTMLUListElement;

    const action = this.isOpen ? 'addClass' : 'removeClass';
    this.renderer[action](dropDownMenuBtn, 'show');
    this.renderer[action](dropDownMenuList, 'show');
  }
}
