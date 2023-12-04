import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-module.strategy';
import { ClientModule } from './modules/client/client.module';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  // { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  // { path: 'client', loadChildren: './modules/client/client.module#ClientModule' },
  // { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  // { path: '**', redirectTo: '/dashboard' },
  {path : 'login', component: LoginComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
