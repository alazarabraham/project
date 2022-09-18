import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { SoftwarePortfolioComponent } from './software-portfolio/software-portfolio.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  {path: "skills", component: SkillsComponent},
  {path: "contact", component: ContactinfoComponent},

  {path: "portfolio", component: SoftwarePortfolioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
