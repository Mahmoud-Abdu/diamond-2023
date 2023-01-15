import { MethodologyDialogComponent } from './methodology-dialog/methodology-dialog.component';
import { CallapiService } from './../../shared/callapi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css']
})
export class MethodologyComponent implements OnInit {
  displayedColumns: string[]
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private api: CallapiService ,public dialog: MatDialog) {
  }
  openDialog() {
    this.dialog.open(MethodologyDialogComponent);

  }
/////////////////////// filtter
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  ngOnInit(): void {
    this.displayedColumns= ['CMP_name', 'CMP_description', 'MTD_mthdType', 'CMP_status', 'usr_full_name', 'buttons'];
    this.api.getMeths().subscribe((data :any ) => {
      this.dataSource= new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;

    })
  }

}
