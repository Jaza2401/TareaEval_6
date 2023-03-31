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
import { ServDataService } from './serv-data.service';
import { MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorComponent } from './error/error.component';



const appRoutes:Routes=[
  
  {path:'', component:LoginComponent},
  {path:'products', component:ListComponent},
  {path:'shop', component:ReadComponent},
  {path:'create', component:CreateComponent},
  {path:'update', component:UpdateComponent},
  {path:'delete', component:DeleteComponent},
  {path:'**', component:ErrorComponent},
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
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ModalModule.forRoot(),
  ],
  providers: [ServDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
