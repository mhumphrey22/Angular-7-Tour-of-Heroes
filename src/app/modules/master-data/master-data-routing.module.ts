import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//  Components
import { MasterDataComponent } from './master-data.component';
import { RequestPhibredComponent } from './request-phibred/request-phibred.component';
import { RequestDasComponent } from './request-das/request-das.component';

const routes: Routes = [
    { path: '', component: MasterDataComponent },
    { path: 'phibred/request', component: RequestPhibredComponent },
    { path: 'das/request', component: RequestDasComponent }
    // {
    //     path: '',
    //     component: MasterDataComponent,
    //     children: [
    //         { path: 'phibred/request', component: RequestPhibredComponent, outlet: 'master-main-view' }
    //     ]
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MasterDataRoutingModule { }
