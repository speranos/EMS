import { Component, EventEmitter, Output } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { user } from '../../interface';
import { Router } from '@angular/router';

import { UserGridComponent } from '../user-grid/user-grid.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() closeForm = new EventEmitter<void>();
  constructor(private back: CrudService, private router: Router){}
  

  formData: user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: ''
  };

  onSubmit() {
    this.back.Add(this.formData).subscribe({
      next:() => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error("Creation Error", err);
      }
    });
  }
}
