import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {'(window:keydown)': 'hotkeys($event)'},
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hotkeys(event){
    if(event.keyCode == 66){
      $(".board-section").toggleClass("open");
  },
  if(event.keyCode == 191){
    $(".searchbar").toggleClass("style");
  }
}

  constructor() { }

  ngOnInit() {
  }

}
