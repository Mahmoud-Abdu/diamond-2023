import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  client: string;
  candidateProject: string;
  projectPlan: string;
  planVersion: number;
  estimatorName: string;
  planStatus: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },
  { client: "Delegata", candidateProject: "Diamond Tour Example", projectPlan: "A Ro Demonstration Plan", planVersion: 1, estimatorName: "Estimator for Yesser Tour", planStatus: "Draft" },


];

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.css']
})
export class EstimatorComponent implements OnInit {

  displayedColumns: string[] = ['client', 'candidateProject', 'projectPlan', 'planVersion', 'estimatorName', 'planStatus', 'star'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }
  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);

    console.log('admin is here')
  }
  test() {
    console.log('lol')
  }
}
