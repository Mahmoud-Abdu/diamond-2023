import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';


export interface PeriodicElement {
  name: string;
  active:string;
  email:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name:'ahmed', email:'mohamed.fadl18@gmail.com',active:'hello'},
  {name:'ahmed', email:'mohamed.fadl18@gmail.com',active:'hello'},
  {name:'ahmed', email:'mohamed.fadl18@gmail.com',active:'hello'},
  {name:'ahmed', email:'mohamed.fadl18@gmail.com',active:'hello'},
  {name:'ahmed', email:'mohamed.fadl18@gmail.com',active:'hello'},
  {name:'ahmed', email:'mohamed.fadl18@gmail.com',active:'hello'},
  {name:'ahmed', email:'mohamed.fadl18@gmail.com',active:'hello'},

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
