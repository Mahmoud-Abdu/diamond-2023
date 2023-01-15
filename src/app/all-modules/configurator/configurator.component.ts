import { CallapiService } from 'src/app/shared/callapi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  displayedColumns: string[];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private api: CallapiService) { }

  ngOnInit(): void {
    this.displayedColumns = ['CPJ_client_name', 'CPJ_name', 'PPV_name', 'PPV_version', 'PPV_status', 'usr_full_name','buttons'];
    this.api.getConf().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator
    })


  }

}
