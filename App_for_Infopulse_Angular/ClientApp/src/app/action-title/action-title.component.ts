import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-action-title',
    templateUrl: './action-title.component.html',
    styleUrls: ['./action-title.component.css']
})
/** ActionTitle component*/
export class ActionTitleComponent {
  @Input() actionTitle: string;
    /** ActionTitle ctor */
    constructor() {

    }
}
