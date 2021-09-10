import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-second-title-with-button',
    templateUrl: './second-title-with-button.component.html',
    styleUrls: ['./second-title-with-button.component.css']
})
/** SecondTitleWithButton component*/
export class SecondTitleWithButtonComponent {
  /** SecondTitleWithButton ctor */
  @Input() actionTitle: string;
  @Input() buttonTitle: string;
  //@Input() pageLink: string;
  //@Input() newItem: string;
  @Output() onChanged = new EventEmitter();
  GotoNewItem() {
    this.onChanged.emit();
  }
    constructor() {

  }
   GoToNewOrderPage(){}
}
