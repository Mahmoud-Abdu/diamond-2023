import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CallapiService } from 'src/app/shared/callapi.service';
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
  displayedColumns = ['CPJ_client_name', 'CPJ_name', 'CPJ_description', 'CPJ_status', 'usr_full_name', 'buttons'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private api: CallapiService) { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.api.getProjects().subscribe(
      data=> {
        this.dataSource = data
      }
    )
  }

}
