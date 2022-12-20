import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  methodology: string;
  category: string;
  outcome: string;
  status: string;
  author: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { name: 'Mahmoud', methodology: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
];
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'methodology', 'category', 'outcome', 'status', 'author'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>  this.dataSource.paginator = this.paginator)

    console.log('componets is heree')
  }

}
