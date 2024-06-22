import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
// import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    AddComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
