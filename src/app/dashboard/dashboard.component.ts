import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = "Material Design for Angular";

  constructor(private router : Router){}

  ngOnInit() {
  }

  navigateMat():void{  
        this.router.navigate(['/mat']);
  };
}
