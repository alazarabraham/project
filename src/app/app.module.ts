import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material/material.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';
import { HttpClientModule } from '@angular/common/http';
import { HealthComponent } from './health/health.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { SkillsAnimationComponent } from './skills-animation/skills-animation.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DragNDropComponent,
    HealthComponent,
    LoginComponent,
    SkillsComponent,
    SkillsAnimationComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
