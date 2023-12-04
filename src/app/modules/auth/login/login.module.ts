// login.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule  } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule ,
    RouterModule ], // Add this line
})
export class LoginModule {}
 