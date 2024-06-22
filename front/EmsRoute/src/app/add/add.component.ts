import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  showForm = false;

  openForm() {
    console.log("&77aaaaalcazbiii");
    this.showForm = true;
    console.log(this.showForm);
  }

  closeForm() {
    console.log("RGSFSDFGSDG");
    this.showForm = false;
  }

}
