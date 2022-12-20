import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  client: string;
  candidateProjectName: string;
  category: string;
  outcome: string;
  status: string;
  author: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
  { client: 'Delegata', candidateProjectName: 'Custom Development', category: 'Project office', outcome: 'show more', status: 'Published', author: 'Nicolle Goldman' },
];
@Component({
  selector: 'app-candidate-project',
  templateUrl: './candidate-project.component.html',
  styleUrls: ['./candidate-project.component.css']
})
export class CandidateProjectComponent implements OnInit {
  displayedColumns: string[] = ['client', 'candidateProjectName', 'category', 'outcome', 'status', 'author'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}
