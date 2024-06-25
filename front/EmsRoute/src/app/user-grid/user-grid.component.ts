// src/app/user-grid/user-grid.component.ts
import { Component, OnInit } from '@angular/core';
import { user } from '../../interface';
import { CrudService } from '../../services/crud.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  Users: user[] = [];
  pagenum:number = 1;
  totalePage:number = 0;
  constructor(private back: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.Mfetch();
}

Mfetch(){
  this.back.GetAll(this.pagenum).subscribe((data: user[]) => {
    this.Users = data;
  });

  this.back.GetCount().subscribe((data: number) => {
    this.totalePage = Math.ceil(data / 9);
  });
}

NextPage(){
  this.pagenum++;
  this.Mfetch();
}

PerviousPage(){
  this.pagenum--;
  this.Mfetch();
}


}
