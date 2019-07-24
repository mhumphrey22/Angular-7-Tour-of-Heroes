import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navigate-back',
    templateUrl: './navigate-back.component.html',
    styleUrls: ['./navigate-back.component.scss']
})

export class NavigateBackComponent {

    constructor(private location: Location) { }

    public navigateBack() {
        this.location.back();
    }

}
