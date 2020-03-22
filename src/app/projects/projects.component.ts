import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

 // str: any ="It is UI of a dating app having three tabs <br> 1. Profile Tab "
  project_list=[
    {
      id:3,
      title:'Password Manager',
      description:'Save your all password in one app. App didn`t use internet and use encryption which make your data secure',
      tech:'Ionic 4, Angular 8, HTML5, SCSS',
      image:'../../assets/images/pw3.jpg'
    },
    {
      id:1,
      title:'Achieve Management',
      description:'"Achieve Management" is a online portal of Achieve Hotel Mangement College design and develop on the basis  of client requirement',
      tech:'React js , Bootstarp , HTML5 , css',
      image:'../../assets/images/achieve2.png'
    },
    {
      id:2,
      title:'Date App',
      description:'It is simple dating app having three tabs <br> 1. Profile Tab <br> 2. Stranger Swipe  Tab <br> 3. Friends List Tab <br> By swiping user can see next and previous stranger and like and dislike it according choice ',
      tech:'React js , Bootstarp , HTML5 , css',
      image:'../../assets/images/date_pic.jpg'
    },
  
    // {
    //   id:1,
    //   title:'Achieve Management',
    //   description:'"Achieve Management" is a online portal of Achieve Hotel Mangement College design and develop on the basis  of client requirement',
    //   tech:'React js , Bootstarp , HTML5 , css',
    //   image:'../../assets/images/achieve2.png'
    // },
    // {
    //   id:2,
    //   title:'Date App',
    //   description:'It is simple dating app having three tabs <br> 1. Profile Tab <br> 2. Stranger Swipe  Tab <br> 3. Friends List Tab <br> By swiping user can see next and previous stranger and like and dislike it according choice ',
    //   tech:'React js , Bootstarp , HTML5 , css',
    //   image:'../../assets/images/date_pic.jpg'
    // }
  ]

  constructor() {
   }

  ngOnInit() {
  }

}
