import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdduserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    }
    addUserForm = new FormGroup({
      Name: new FormControl('', [Validators.required] ),
      Email: new FormControl('' ,[Validators.required] ),
      Phone: new FormControl('',Validators.required),
      Jop: new FormControl('',[Validators.required])

    });
    close(): void {
      this.dialogRef.close();
    }
    addUser(){
      console.log();
      this.dialogRef.close()
    }
    onSubmit(){
      console.log( this.addUserForm.value );
      this.dialogRef.close()

    }
  ngOnInit(): void {
  }

}
