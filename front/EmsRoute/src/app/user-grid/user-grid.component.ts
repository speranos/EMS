// src/app/user-grid/user-grid.component.ts
import { Component, OnInit } from '@angular/core';
import { user } from '../../interface';
import { CrudService } from '../../services/crud.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  Users: user[] = [];
  constructor(private back: CrudService) { }

  
  ngOnInit(): void {
    this.back.GetAll().subscribe((data: user[]) => {
      this.Users = data;
      console.log(this.Users[0].id);
    });
  }
}
