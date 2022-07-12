import { Component, OnInit } from '@angular/core';
import { Technology } from '../model/Technology';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  firstImg: boolean = true;
  secondImg: boolean = false;
  thirdImg: boolean = false;
  fourthImg: boolean = false;
  fifthImg: boolean = false;

  languages: Technology[] = [
    {name: "Java", img: "https://www.svgrepo.com/show/303388/java-4-logo.svg"}, 
    {name: "Javascript", img: "https://www.svgrepo.com/show/373703/js.svg"}, 
    {name: "TypeScript", img: "https://www.svgrepo.com/show/349540/typescript.svg"}, 
    {name: "HTML", img: "https://www.svgrepo.com/show/80703/html.svg"}, 
    {name: "CSS", img: "https://www.svgrepo.com/show/134149/css.svg"}, 
    {name: "Python", img: "https://www.svgrepo.com/show/166811/py.svg"}, 
    {name: "SQL", img: "https://www.svgrepo.com/show/120229/sql.svg"},
    {name: "XML", img: "https://www.svgrepo.com/show/255827/xml.svg"},
  ];

  frameworks: Technology[] = [
    {name: "Angular", img: "https://www.svgrepo.com/show/349591/angular.svg"}, 
    {name: "React", img: "https://www.svgrepo.com/show/354259/react.svg"}, 
    {name: "NodeJS", img: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg"}, 
    {name: "ExpressJS", img: "https://fd-development.com/images/expressjs.png"},
    {name: "Spring Boot", img: "https://www.openxcell.com/wp-content/uploads/2021/10/springboot-inner.svg"}, 
    {name: "Spring Framework", img: "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png"}, 
    {name: "Struts", img: "https://www.svgrepo.com/show/354402/struts.svg"}, 
    {name: "Hibernate", img: "https://www.svgrepo.com/show/353874/hibernate.svg"}, 
    {name: "Bootstrap", img: "https://www.svgrepo.com/show/353498/bootstrap.svg"}, 
    {name: "Angular Material", img: "https://repository-images.githubusercontent.com/220078160/9353b600-0e54-11ea-9712-b79b66b93c00"}, 
  ];

  buildTools: Technology[] = [
    {name: "Gradle", img: "https://www.svgrepo.com/show/306152/gradle.svg"}, 
    {name: "Maven", img: "https://www.svgrepo.com/show/354051/maven.svg"},
    {name: "NPM", img: "https://www.svgrepo.com/show/376341/npm.svg"},
    {name: "Grunt", img: "https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667"}
  ];
  
  databases: Technology[] = [
    {name: "MySQL", img: "https://www.svgrepo.com/show/354099/mysql.svg"}, 
    {name: "PostgreSQL", img: "https://www.svgrepo.com/show/373965/pgsql.svg"},
    {name: "Oracle Database", img: "https://www.svgrepo.com/show/303303/oracle-6-logo.svg"},
    {name: "MongoDB", img: "https://www.svgrepo.com/show/373845/mongo.svg"},

  ];

  servers: Technology[] = [
    {name: "Websphere", img: "https://www.easyask.com/wp-content/uploads/2019/02/ibm-websphere-commerce-logo-1024x1024.gif"}, 
    {name: "JBoss", img: "https://www.svgrepo.com/show/354271/redhat.svg"},
    {name: "Amazon Webservices", img: "https://www.svgrepo.com/show/376356/aws.svg"},
    {name: "Tomcat", img: "https://www.svgrepo.com/show/354454/tomcat.svg"},
  ];


  changeAnimationImage(e: any){
    
    if(e.index == 0){
      this.firstImg = true;
      this.secondImg = false;
      this.thirdImg = false;
      this.fourthImg = false;
      this.fifthImg = false;
    }else if(e.index == 1){
      this.firstImg = false;
      this.secondImg = true;
      this.thirdImg = false;
      this.fourthImg = false;
      this.fifthImg = false;
    }else if(e.index == 2){
      this.firstImg = false;
      this.secondImg = false;
      this.thirdImg = true;
      this.fourthImg = false;
      this.fifthImg = false;
    }else if(e.index == 3){
      this.firstImg = false;
      this.secondImg = false;
      this.thirdImg = false;
      this.fourthImg = true;
      this.fifthImg = false;
    }else if(e.index == 4){
      this.firstImg = false;
      this.secondImg = false;
      this.thirdImg = false;
      this.fourthImg = false;
      this.fifthImg = true;
    }
  }
  ngOnInit(): void {
  }

}
