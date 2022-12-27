import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-knowledge-library-details',
  templateUrl: './knowledge-library-details.component.html',
  styleUrls: ['./knowledge-library-details.component.css']
})

export class KnowledgeLibraryDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<KnowledgeLibraryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    س
  close(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {
  }

}
