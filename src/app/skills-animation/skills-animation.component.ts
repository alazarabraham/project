import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-animation',
  templateUrl: './skills-animation.component.html',
  styleUrls: ['./skills-animation.component.css']
})
export class SkillsAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
  scrollToSkills(){
    let element = <HTMLDivElement> document.getElementById('skills');
    element.scrollIntoView();
  }
}
