import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { AddComponent } from './add/add.component';
// import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
