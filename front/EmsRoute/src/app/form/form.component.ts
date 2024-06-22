import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() closeForm = new EventEmitter<void>();

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: ''
  };

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.closeForm.emit();
  }

  close() {
    this.closeForm.emit();
  }
}
