import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CallapiService } from 'src/app/shared/callapi.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
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
    this.displayedColumns = ['WPC_name', 'CMP_name', 'WPC_category', 'WPC_status', 'usr_full_name', 'buttons'];
    this.api.getComp().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
    })

  }

}
