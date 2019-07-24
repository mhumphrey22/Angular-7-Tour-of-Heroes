// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Modules
import { AngularMaterialModule } from '../../modules/angular-material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  Routing
import { MasterDataRoutingModule } from './master-data-routing.module';

//  Components
import { MasterDataComponent } from './master-data.component';
import { RequestPhibredComponent } from './request-phibred/request-phibred.component';
import { RequestDasComponent } from './request-das/request-das.component';
import { NavigateBackComponent } from '../../components/navigate-back/navigate-back.component';

@NgModule({
    declarations: [
        MasterDataComponent,
        RequestPhibredComponent,
        RequestDasComponent,
        //  Utility Components
        NavigateBackComponent,
    ],
    imports: [
        // BrowserModule,
        CommonModule,
        MasterDataRoutingModule,
        AngularMaterialModule,
        // BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class MasterDataModule { }
