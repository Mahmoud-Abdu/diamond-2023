import { CallapiService } from './../../shared/callapi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css']
})
export class MethodologyComponent implements OnInit {
  displayedColumns: string[] = ['CMP_name', 'CMP_description', 'MTD_mthdType', 'CMP_status', 'usr_full_name', 'buttons'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
CMPs:any;
  constructor(private api: CallapiService) {
  }


  ngOnInit(): void {
    this.api.getMeths().subscribe(data => {
      console.log(data);
      this.dataSource = data
    })
  }

}
