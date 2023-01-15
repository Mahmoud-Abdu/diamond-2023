import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CallapiService } from 'src/app/shared/callapi.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-candidate-project',
  templateUrl: './candidate-project.component.html',
  styleUrls: ['./candidate-project.component.css']
})
export class CandidateProjectComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private api: CallapiService) { }
    /////////////////////// filtter
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngOnInit(): void {
    this.displayedColumns = ['CPJ_client_name', 'CPJ_name', 'CPJ_description', 'CPJ_owner', 'CPJ_status', 'buttons'];
    this.api.getProjects().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
    }
    )
  }

}
