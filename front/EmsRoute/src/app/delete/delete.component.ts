import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
constructor(private back: CrudService, private route: ActivatedRoute, private router: Router){}

userId:string = '';
Users: user[] = [];

ngOnInit() {
  this.route.params.subscribe(params => {
    this.userId = params['id'];
  });
}

confirmDelete() {
  this.back.Delete(this.userId).subscribe({
    next: () => {
        this.router.navigate(['']);
    },
    error: (err) => {
      console.error("Delete failed", err);
    }
  });
}

}
