import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';

const appRoutes:Routes=[
  
  {path:'', component:LoginComponent},
  {path:'products', component:ListComponent},
  {path:'shop', component:ReadComponent},
  {path:'create', component:CreateComponent},
  {path:'update', component:UpdateComponent},
  {path:'delete', component:DeleteComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    DeleteComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
