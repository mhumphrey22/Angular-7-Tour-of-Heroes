import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-request-das',
    templateUrl: './request-das.component.html',
    styleUrls: ['./request-das.component.scss']
})
export class RequestDasComponent implements OnInit {

    public dasMaterialForm = new FormGroup({
        tradeProductCode: new FormControl(''),
        tradeProductName: new FormControl(''),
        cropType: new FormControl(''),
        manufacturingPlant: new FormControl(''),
        plantsOfSaleShipping: new FormControl(''),
        brand: new FormControl(''),
        countryOfSale: new FormControl(''),
        grade: new FormControl(''),
        packageSizes: new FormControl(''),
        treatment: new FormControl(''),
        seedSize: new FormControl(''),
        grossWeight: new FormControl(''),
        netWeight: new FormControl(''),
        volume: new FormControl(''),
        referenceGMID: new FormControl(''),
        referencePlant: new FormControl('')
    });

    constructor() { }

    ngOnInit() {
    }

    public onSubmit() {
        console.warn(this.dasMaterialForm.value);
    }

}
