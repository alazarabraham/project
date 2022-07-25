import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Technology } from '../model/Technology';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  firstImg: boolean = true;
  secondImg: boolean = false;
  thirdImg: boolean = false;
  fourthImg: boolean = false;
  fifthImg: boolean = false;

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  languages: any[] = [
    {name: "Java", img: "https://www.svgrepo.com/show/303388/java-4-logo.svg", description: "Java is my favorite language. Besides Javascript, most of my experience is with Java. Have worked with many Java technologies, including: Java Standard libraries, Apache Commons, Jackson, Maven, Log4j, JMS, etc"}, 
    {name: "Javascript", img: "https://www.svgrepo.com/show/373703/js.svg", description: "Have worked extensively with Javascript. Have experience with a number of Javascript frameworks and technologies, including: Angular, React, ExpressJS, NodeJS, JQuery, etc."}, 
    {name: "TypeScript", img: "https://www.svgrepo.com/show/349540/typescript.svg", description: "Have experience working with Typescript, particulary when working with Angular Typescript."}, 
    {name: "HTML", img: "https://www.svgrepo.com/show/80703/html.svg", description: "Have worked extensively with HTML"}, 
    {name: "CSS", img: "https://www.svgrepo.com/show/134149/css.svg", description: "Have worked extensively with CSS. Experienced with Bootstrap and Angular Material."}, 
    {name: "Python", img: "https://www.svgrepo.com/show/166811/py.svg", description: "Have experience worked with Python"}, 
    {name: "SQL", img: "https://www.svgrepo.com/show/120229/sql.svg", description: "Have worked extensively with SQL and SQL databases. Have working knowledge of SQL databases and well versed in SQL syntax"},
    {name: "XML", img: "https://www.svgrepo.com/show/255827/xml.svg", description: ""},
  ];

  frameworks: Technology[] = [
    {name: "Angular", img: "https://www.svgrepo.com/show/349591/angular.svg", description: ""}, 
    {name: "React", img: "https://www.svgrepo.com/show/354259/react.svg", description: ""}, 
    {name: "NodeJS", img: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg", description: ""}, 
    {name: "ExpressJS", img: "https://fd-development.com/images/expressjs.png", description: ""},
    {name: "Spring Boot", img: "https://www.openxcell.com/wp-content/uploads/2021/10/springboot-inner.svg", description: ""}, 
    {name: "Spring Framework", img: "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png", description: ""}, 
    {name: "Struts", img: "https://www.svgrepo.com/show/354402/struts.svg", description: ""}, 
    {name: "Hibernate", img: "https://www.svgrepo.com/show/353874/hibernate.svg", description: ""}, 
    {name: "Bootstrap", img: "https://www.svgrepo.com/show/353498/bootstrap.svg", description: ""}, 
    {name: "Angular Material", img: "https://repository-images.githubusercontent.com/220078160/9353b600-0e54-11ea-9712-b79b66b93c00", description: ""}, 
  ];

  buildTools: Technology[] = [
    {name: "Gradle", img: "https://www.svgrepo.com/show/306152/gradle.svg", description: ""}, 
    {name: "Maven", img: "https://www.svgrepo.com/show/354051/maven.svg", description: ""},
    {name: "NPM", img: "https://www.svgrepo.com/show/376341/npm.svg", description: ""},
    {name: "Grunt", img: "https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667", description: ""}
  ];
  
  databases: Technology[] = [
    {name: "MySQL", img: "https://www.svgrepo.com/show/354099/mysql.svg", description: ""}, 
    {name: "PostgreSQL", img: "https://www.svgrepo.com/show/373965/pgsql.svg", description: ""},
    {name: "Oracle Database", img: "https://www.svgrepo.com/show/303303/oracle-6-logo.svg", description: ""},
    {name: "MongoDB", img: "https://www.svgrepo.com/show/373845/mongo.svg", description: ""},

  ];

  servers: Technology[] = [
    {name: "Websphere", img: "https://www.easyask.com/wp-content/uploads/2019/02/ibm-websphere-commerce-logo-1024x1024.gif", description: ""}, 
    {name: "JBoss", img: "https://www.svgrepo.com/show/354271/redhat.svg", description: ""},
    {name: "Amazon Webservices", img: "https://www.svgrepo.com/show/376356/aws.svg", description: ""},
    {name: "Tomcat", img: "https://www.svgrepo.com/show/354454/tomcat.svg", description: ""},
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
