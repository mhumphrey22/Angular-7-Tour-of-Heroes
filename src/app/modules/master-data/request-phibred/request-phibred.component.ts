import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//  Models
import { PhibredMaterialRequest } from '../../../models/phibred-material-request.interface';

const REQUEST_DATA: PhibredMaterialRequest[] = [
    {
        material: 'Test Material #1',
        brand: 'Test Brand #1',
        division: 'Test Division #1',
        materialGroup: 'Test Material Group #1',
        baseGeneticOwner: 'Test Base Genetic Owner #1',
        region: 'Test Region #1',
        country: 'Test Country #1',
        plant: 'Test Plant #1',
        oldMaterialNumber: true,
        phiNumber: 'Test PHI Number #1',
        crm: 'Test CRM #1'
    },
    {
        material: 'Test Material #2',
        brand: 'Test Brand #2',
        division: 'Test Division #2',
        materialGroup: 'Test Material Group #2',
        baseGeneticOwner: 'Test Base Genetic Owner #2',
        region: 'Test Region #2',
        country: 'Test Country #2',
        plant: 'Test Plant #2',
        oldMaterialNumber: false,
        phiNumber: 'Test PHI Number #2',
        crm: 'Test CRM #2'
    },
    {
        material: 'Test Material #3',
        brand: 'Test Brand #3',
        division: 'Test Division #3',
        materialGroup: 'Test Material Group #3',
        baseGeneticOwner: 'Test Base Genetic Owner #3',
        region: 'Test Region #3',
        country: 'Test Country #3',
        plant: 'Test Plant #3',
        oldMaterialNumber: true,
        phiNumber: 'Test PHI Number #3',
        crm: 'Test CRM #3'
    },
    {
        material: 'Test Material #4',
        brand: 'Test Brand #4',
        division: 'Test Division #4',
        materialGroup: 'Test Material Group #4',
        baseGeneticOwner: 'Test Base Genetic Owner #4',
        region: 'Test Region #4',
        country: 'Test Country #4',
        plant: 'Test Plant #4',
        oldMaterialNumber: true,
        phiNumber: 'Test PHI Number #4',
        crm: 'Test CRM #4'
    },
    {
        material: 'Test Material #5',
        brand: 'Test Brand #5',
        division: 'Test Division #5',
        materialGroup: 'Test Material Group #5',
        baseGeneticOwner: 'Test Base Genetic Owner #5',
        region: 'Test Region #5',
        country: 'Test Country #5',
        plant: 'Test Plant #5',
        oldMaterialNumber: false,
        phiNumber: 'Test PHI Number #5',
        crm: 'Test CRM #5'
    },
    {
        material: 'Test Material #6',
        brand: 'Test Brand #6',
        division: 'Test Division #6',
        materialGroup: 'Test Material Group #6',
        baseGeneticOwner: 'Test Base Genetic Owner #6',
        region: 'Test Region #6',
        country: 'Test Country #6',
        plant: 'Test Plant #6',
        oldMaterialNumber: false,
        phiNumber: 'Test PHI Number #6',
        crm: 'Test CRM #6'
    },
    {
        material: 'Test Material #7',
        brand: 'Test Brand #7',
        division: 'Test Division #7',
        materialGroup: 'Test Material Group #7',
        baseGeneticOwner: 'Test Base Genetic Owner #7',
        region: 'Test Region #7',
        country: 'Test Country #7',
        plant: 'Test Plant #7',
        oldMaterialNumber: true,
        phiNumber: 'Test PHI Number #7',
        crm: 'Test CRM #7'
    },
];

@Component({
  selector: 'app-request-phibred',
  templateUrl: './request-phibred.component.html',
  styleUrls: ['./request-phibred.component.scss']
})

export class RequestPhibredComponent implements OnInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true }) sort: MatSort;

    public dataSource = new MatTableDataSource<PhibredMaterialRequest>(REQUEST_DATA);

    public displayedColumns: string[] = [
        'material',
        'brand',
        'division',
        'materialGroup',
        'baseGeneticOwner',
        'region',
        'country',
        'plant',
        'oldMaterialNumber',
        'phiNum',
        'crm'
    ];

    public value: string;

    constructor() { }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
