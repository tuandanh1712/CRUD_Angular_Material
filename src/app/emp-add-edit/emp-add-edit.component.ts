import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployyeeService } from '../services/employyee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  education: string[] = [
    'Marix',
    'Diploma',
    'Intermedicate',
    'Graduate',
    'Post Graduate',
  ];
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private empServices: EmployyeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dod: '',
      gender: '',
      education: '',
      experience: '',
      company: '',
      package: '',
    });
  }

  ngOnInit(): void {
    console.log('data', this.data);
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this.empServices
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Employee Updated successly!!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      } else {
        this.empServices.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee add successly');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }
}
