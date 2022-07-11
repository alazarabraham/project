import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  {path: "skills", component: SkillsComponent},
  {path: "drag", component: DragNDropComponent},
  {path: "health", component: HealthComponent},
  {path: "login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
