import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  thisMessage="";
  messages=[];

  constructor() { }

  sendMessage(){
    let messages ={
      thisMessage: this.thisMessage
    }
    this.messages.push(messages);
    this.clearField();
  }
  clearField(){
    this.thisMessage = "";
  }


  ngOnInit() {
  }

}
