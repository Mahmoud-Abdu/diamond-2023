import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

];

@Component({
  selector: 'app-knowledge-library-dialog',
  templateUrl: './knowledge-library-dialog.component.html',
  styleUrls: ['./knowledge-library-dialog.component.css']
})

export class KnowledgeLibraryDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<KnowledgeLibraryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  close(): void {
    this.dialogRef.close();
  }

  displayedColumns: string[] = ['name', 'email', 'active'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}
