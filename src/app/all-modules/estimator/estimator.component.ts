import { Component, OnInit, ViewChild } from '@angular/core';
import { CallapiService } from 'src/app/shared/callapi.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.css']
})
export class EstimatorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[];
  dataSource: any;


  constructor(private api: CallapiService) { }
  ngOnInit(): void {
    this.displayedColumns = ['CPJ_client_name', 'CPJ_name', 'PPV_name', 'PPV_version', 'EVR_name','PPV_status','buttons'];
    this.api.getEst().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.recordset)
      this.dataSource.paginator = this.paginator;



    })
  }
}
