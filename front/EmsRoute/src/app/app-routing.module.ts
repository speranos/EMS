import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';
import { UserGridComponent } from './user-grid/user-grid.component';

const routes: Routes = [
  { path: '', component: UserGridComponent },
  { path: 'add', component: FormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
