import { Directive,
		 HostListener, 
		 HostBinding
		} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') onclickDropdown(eventData: Event) {
  	this.isOpen = !this.isOpen;
  }

}
