import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  wps: string;
  taskName: string;
  date: string;
  duration: string;
  resources: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published'},
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published'},
  { wps: 'Delegata', taskName: 'New Task', date: '2010-12-09', duration: 'show more', resources: 'Published' },
];

@Component({
  selector: 'app-add-configurator',
  templateUrl: './add-configurator.component.html',
  styleUrls: ['./add-configurator.component.css']
})
export class AddConfiguratorComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['wps', 'taskName', 'date', 'duration', 'resources'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  ngOnInit(): void {
  }

}
