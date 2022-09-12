import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material/material.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { SkillsAnimationComponent } from './skills-animation/skills-animation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SoftwarePortfolioComponent } from './software-portfolio/software-portfolio.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    SkillsAnimationComponent,
    SoftwarePortfolioComponent,
    ContactinfoComponent,
    ResumeComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
