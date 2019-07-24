import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Material
import { MatAutocompleteModule, MatTableModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';

//  Flex Layouts
import { FlexLayoutModule } from '@angular/flex-layout';


const MATERIAL_MODULES = [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,

    // These modules include providers.
    MatButtonToggleModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,

    FlexLayoutModule,
];


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})

export class AngularMaterialModule { }
