import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Technology } from '../model/Technology';
import { OnboardingService } from "@rosen-group/ngx-onboarding";
declare var $:any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  firstImg: boolean = true;
  secondImg: boolean = false;
  thirdImg: boolean = false;
  fourthImg: boolean = false;
  fifthImg: boolean = false;
  walkThrough: any[] = [];
  constructor(private snackBar: MatSnackBar, private onboardingService: OnboardingService) {
    onboardingService.configure({
      iconConfiguration: {
          matIconName: 'tips_and_updates'
      },
      textConfiguration: {
        regularFontFamily: 'Sans-Serif, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;',
        scriptFontFamily: 'Sans-Serif,"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;'
    },
      
    });
    this.walkThrough = [
      {
        selector: "#nav",
        group: "example2",
        position: "below",
        textAlign: "below",
        headline: "Navigation",
        details: "Navigate between pages here. Click anywhere on the page to continue."
      },
      {
        selector: "#stepOne",
        group: "example1",
        position: "top",
        textAlign: "top",
        headline: "Tabs",
        details: "Have included technologies I have experience with here, please use tabs for navigation. Hover over icons for more information. Click anywhere on the page to continue."
      }
    ];
   }



  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  languages: any[] = [
    {
      name: "Java", img: "https://www.svgrepo.com/show/303388/java-4-logo.svg", 
      description: "Primary language, besides Javascript. Proficient in Java and Java concepts, including but not limited to: Java class structure and design, Core Java APIs, Design Patterns and principals, Object Oriented Programming, etc."}, 
    {
      name: "Javascript", img: "https://www.svgrepo.com/show/373703/js.svg", 
      description: "Proficient in Javascript and have experience with a number of Javascript frameworks and technologies, including: Angular, React, ExpressJS, NodeJS, JQuery, etc."}, 
    {
      name: "TypeScript", img: "https://www.svgrepo.com/show/349540/typescript.svg", 
      description: "Have worked extensively with Typescript. In particular when working with Angular Typescript."}, 
    {
      name: "HTML", img: "https://www.svgrepo.com/show/80703/html.svg", 
      description: "Proficient in HTML and HTML concepts, including, but not limited to:  Document Object Model, Elements/Tags, Forms, Events, etc."}, 
    {
      name: "CSS", img: "https://www.svgrepo.com/show/134149/css.svg", 
      description: "Proficient in CSS and CSS styling. Have extensive work experience with Bootstrap and Angular Material frameworks."}, 
    {
      name: "Python", img: "https://www.svgrepo.com/show/166811/py.svg", 
      description: "Have experience working with Python and understand Python syntax."}, 
    {
      name: "SQL", img: "https://www.svgrepo.com/show/120229/sql.svg", 
      description: "Proficient in SQL and SQL syntax. Have experience with both Relational and Non-Relational Databases."},
    {
      name: "XML", img: "https://www.svgrepo.com/show/255827/xml.svg", 
      description: "Have worked extensively with XML document structure."},
  ];

  frameworks: Technology[] = [
    {
      name: "Angular", img: "https://www.svgrepo.com/show/349591/angular.svg", 
      description: "Proficient in Angular. Have worked extensively with Angular Typescript and Angular JS. My favorite web framework to work with."}, 
    {
      name: "React", img: "https://www.svgrepo.com/show/354259/react.svg", 
      description: "Have extensive experience working with ReactJS and have developed many projects with the framework."}, 
    {
      name: "NodeJS", img: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg", 
      description: "Have extensive experience with NodeJS and appreciate the technology."}, 
    {
      name: "ExpressJS", img: "https://fd-development.com/images/expressjs.png", 
      description: "Have developed projects with ExpressJS framework and have great familiarity with the framework."},
    {
      name: "Spring Boot", img: "https://cdn.worldvectorlogo.com/logos/spring-3.svg", 
      description: "Proficient in Spring boot and have extensive experience working with it. Enjoy developing and learning Spring Boot."}, 
    {
      name: "Spring Framework", img: "https://download.logo.wine/logo/Spring_Framework/Spring_Framework-Logo.wine.png", 
      description: "Have extensively worked with Spring Framework and understand the framework well."}, 
    {
      name: "Struts", img: "https://www.svgrepo.com/show/354402/struts.svg", 
      description: "Have had exposure to Struts in applications I have encountered in my work"}, 
    {
      name: "Hibernate", img: "https://www.svgrepo.com/show/353874/hibernate.svg", 
      description: "Enjoy using Hibernate and have familiarity with the library."}, 
    {
      name: "Bootstrap", img: "https://www.svgrepo.com/show/353498/bootstrap.svg", 
      description: "Proficient with bootstrap and have extensive work experience with the framework."}, 
    {
      name: "Angular Material", img: "https://repository-images.githubusercontent.com/220078160/9353b600-0e54-11ea-9712-b79b66b93c00", 
      description: "Have worked with Angular Material extensively, and have developed many components with the framework."}, 
  ];

  buildTools: Technology[] = [
    {
      name: "Gradle", img: "https://www.svgrepo.com/show/306152/gradle.svg", 
      description: ""}, 
    {
      name: "Maven", img: "https://www.svgrepo.com/show/354051/maven.svg", 
      description: ""},
    {
      name: "NPM", img: "https://www.svgrepo.com/show/376341/npm.svg", 
      description: ""},
    {
      name: "Grunt", img: "https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667", 
      description: ""}
  ];
  
  databases: Technology[] = [
    {
      name: "MySQL", img: "https://www.svgrepo.com/show/354099/mysql.svg", 
      description: ""}, 
    {
      name: "PostgreSQL", img: "https://www.svgrepo.com/show/373965/pgsql.svg", 
      description: ""},
    {
      name: "Oracle Database", img: "https://www.svgrepo.com/show/303303/oracle-6-logo.svg", 
      description: ""},
    {
      name: "MongoDB", img: "https://www.svgrepo.com/show/373845/mongo.svg", 
      description: ""},

  ];

  servers: Technology[] = [
    {
      name: "Websphere", img: "https://www.easyask.com/wp-content/uploads/2019/02/ibm-websphere-commerce-logo-1024x1024.gif", 
      description: ""}, 
    {
      name: "JBoss", img: "https://www.svgrepo.com/show/354271/redhat.svg", 
      description: ""},
    {
      name: "Amazon Webservices", img: "https://www.svgrepo.com/show/376356/aws.svg", 
      description: ""},
    {
      name: "Tomcat", img: "https://www.svgrepo.com/show/354454/tomcat.svg", 
      description: ""},
  ];

  enableHelper(){
    this.onboardingService.clearSeenSelectors();
    this.onboardingService.enable();
    this.onboardingService.register(this.walkThrough);

  }

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
  gotoTop() {

    var scrollElem :any = document.querySelector('#moveTop');
    scrollElem.scrollIntoView(); 

   }
  ngOnInit(): void {
    
    // $(document).ready(function(){
    //     $("#scroll").click();
        
    // });
    const scroll = document.getElementById("scroll");
    setTimeout(function () {
      scroll?.click()
    }, 2000);
    this.onboardingService.clearSeenSelectors();
    this.onboardingService.enable();
    this.onboardingService.register(this.walkThrough);
    
  }


}
