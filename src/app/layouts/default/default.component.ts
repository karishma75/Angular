import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  SideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  togglesidenav(ev){
    this.SideBarOpen = !this.SideBarOpen;
  }
}
