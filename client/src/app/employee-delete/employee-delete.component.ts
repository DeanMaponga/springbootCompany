import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent {
  @Output() 
  result = new EventEmitter<boolean>();

  constructor(private dialogRef: MatDialogRef<EmployeeDeleteComponent>){}

  confirmDelete(){
    this.dialogRef.close(true);
  }
  cancelDelete(){
    this.dialogRef.close(false);
  }
}
