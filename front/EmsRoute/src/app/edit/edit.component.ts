import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../interface';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(private back: CrudService, private route: ActivatedRoute, private router: Router){}

userId:string = '';

User:user = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  position: '',
  department: '',
};

ngOnInit() {
  this.route.params.subscribe(params => {
    this.userId = params['id'];

    console.log('User ID:', this.userId);

  });
  this.back.GetUser(this.userId).subscribe((data: user) => {
    this.User = data;
    console.log(this.User);
  });
}

onSubmit(){
  this.back.UpdateUser(this.User).subscribe({
    next: () => {
      this.router.navigate(['']);
    },
    error: (err) => {
      console.error("Creation Error", err);
    }
  });
}

}
