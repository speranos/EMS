import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
constructor(private back: CrudService, private route: ActivatedRoute){}

userId:string = '';

ngOnInit() {
  this.route.params.subscribe(params => {
    this.userId = params['id'];
    console.log('User ID:', this.userId);
  });
}

confirmDelete(){
  console.log("confirmed!!")
  this.back.Delete(this.userId).subscribe();

}
// cancelDelete(){}



}
