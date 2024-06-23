import { Component, EventEmitter, Output } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { user } from '../../interface';
import { UserGridComponent } from '../user-grid/user-grid.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() closeForm = new EventEmitter<void>();
  constructor(private back: CrudService){}
  

  formData: user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: ''
  };

  onSubmit() {
    this.back.Add(this.formData).subscribe();
    this.closeForm.emit();
      // .subscribe(
      //   (response) => {
      //     console.log('POST request successful', response);
      //     // Handle success, e.g., show a success message
      //   },
      //   (error) => {
      //     console.error('Error in POST request', error);
      //     // Handle error, e.g., show an error message
      //   }
      // );
  }

  close() {
    this.closeForm.emit();
  }
}
