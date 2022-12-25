import { KnowledgeLibraryDialogComponent } from './knowledge-library-dialog/knowledge-library-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
KnowledgeLibraryDialogComponent

@Component({
  selector: 'app-knowledge-library',
  templateUrl: './knowledge-library.component.html',
  styleUrls: ['./knowledge-library.component.css']
})

export class KnowledgeLibraryComponent implements OnInit {

  constructor(public dialog: MatDialog) {

   }

    openDialog() {

      const dialogRef = this.dialog.open(KnowledgeLibraryDialogComponent, {
        position: { right: '0', },
        height:'100%'

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });    }

  dummy = [];
  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      this.dummy.push({})
    }
    console.log('knowledge is here', this.dummy)
  }

}
