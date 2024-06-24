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
  formSubmitted = false;

  onSubmit(form: any) {
    console.log(this.formData);
    console.log("kifach lblan");
      this.back.Add(this.formData).subscribe();
      // this.closeForm.emit();
  }

  // close() {
  //   this.closeForm.emit();
  // }
}
