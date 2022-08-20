import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  nav_class: any = "nav"

  constructor() { }

  ngOnInit(): void {
    console.log("Iniating navbar");
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    if (window.scrollY > 100) {
      this.nav_class = "nav nav__black"
    } else {
      this.nav_class = "nav"
    }

  }

}
