import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.scss']
})
export class CompanyDeleteComponent {
  @Output() 
  result = new EventEmitter<string>();

  constructor(private dialogRef: MatDialogRef<CompanyDeleteComponent>){}

  confirmDelete(){
    this.dialogRef.close(true);
  }
  cancelDelete(){
    this.dialogRef.close(false);
  }
}
