import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


    close(): void {
      this.dialogRef.close();
    }


  ngOnInit(): void {
  }

}
