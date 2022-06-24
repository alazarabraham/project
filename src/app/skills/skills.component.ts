import { Component, OnInit } from '@angular/core';
import { Technology } from '../model/Technology';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  technologies: Technology[] = [
    {name: "Java", img: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"}, 
    {name: "Javascript", img: "https://www.svgrepo.com/show/373703/js.svg"}, 
    {name: "TypeScript", img: "https://www.svgrepo.com/show/349540/typescript.svg"}, 
    {name: "HTML", img: "https://www.svgrepo.com/show/80703/html.svg"}, 
    {name: "CSS", img: "https://www.svgrepo.com/show/250453/css.svg"}, 
    {name: "Python", img: "https://www.svgrepo.com/show/166811/py.svg"}, 
    {name: "XML", img: "https://www.svgrepo.com/show/31053/xml.svg"}, 
    {name: "Angular", img: "https://www.svgrepo.com/show/349591/angular.svg"}, 
    {name: "React", img: "https://www.svgrepo.com/show/354259/react.svg"}, 
    {name: "NodeJS", img: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg"}, 
    {name: "ExpressJS", img: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"}, 
    {name: "Gradle", img: "https://www.svgrepo.com/show/306152/gradle.svg"}, 
    {name: "Maven", img: "https://www.svgrepo.com/show/354051/maven.svg"}, 
    {name: "Spring Boot", img: "https://blogs.ashrithgn.com/content/images/2019/07/spring-boot-logo.png"}, 
    {name: "Spring Framework", img: "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png"}, 
    {name: "Jsp", img: "https://www.svgrepo.com/show/14636/jsp-open-file-format-with-java-logo.svg"}, 
    {name: "Struts", img: "https://www.svgrepo.com/show/354402/struts.svg"}, 
  ];
  ngOnInit(): void {
  }

}
