import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  description: string;
  category: string;
  outcome: string;
  status: string;
  author: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', description: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
];
@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css']
})
export class MethodologyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'category', 'outcome', 'status', 'author'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator)
    console.log('methodology is here')
  }

}
