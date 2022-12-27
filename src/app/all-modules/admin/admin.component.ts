import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079 },
  { position: 2, name: 'Helium', weight: 4.0026 },
  { position: 3, name: 'Lithium', weight: 6.941 },
  { position: 4, name: 'Beryllium', weight: 9.0122 },
  { position: 5, name: 'Boron', weight: 10.811 },
  { position: 6, name: 'Carbon', weight: 12.0107 },
  { position: 7, name: 'Nitrogen', weight: 14.0067 },
  { position: 8, name: 'Oxygen', weight: 15.9994 },
  { position: 9, name: 'Fluorine', weight: 18.9984 },
  { position: 10, name: 'Neon', weight: 20.1797 },
];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'active'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }
  openDialog() {

    const dialogRef = this.dialog.open(AdduserComponent, {
      position: { right: '0' },
      height:'100%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);

    console.log('admin is here')
  }

  test() {
    console.log('lol')
  }

  }
