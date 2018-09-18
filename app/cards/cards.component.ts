import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  host: {'(window:keydown)': 'hotkeys($event)'},
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  hotkeys(event){
    if(event.keyCode == 88 && event.ctrlKey){
    this.newElement();
  };
  if(event.keyCode == 89 && event.ctrlKey){
    this.newElement1();
  };
  if(event.keyCode == 90 && event.ctrlKey){
    this.newElement2();
  }
}

// Script for first card 
  newElement() {
    var li = document.createElement("li");
    var inputValue = (document.getElementById("myInput") as HTMLInputElement).value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(li);
    }
    (document.getElementById("myInput") as HTMLInputElement).value = "";
    }

    // Script for second card
    newElement1() {
      var li = document.createElement("li");
      var inputValue = (document.getElementById("myInput1") as HTMLInputElement).value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
      alert("You must write something!");
      } else {
      document.getElementById("myUL1").appendChild(li);
      }
      (document.getElementById("myInput1") as HTMLInputElement).value = "";
      }

     // Script for second card
     newElement2() {
      var li = document.createElement("li");
      var inputValue = (document.getElementById("myInput2") as HTMLInputElement).value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
      alert("You must write something!");
      } else {
      document.getElementById("myUL2").appendChild(li);
      }
      (document.getElementById("myInput2") as HTMLInputElement).value = "";
      }

  constructor() { }

  ngOnInit() {
  }

}
