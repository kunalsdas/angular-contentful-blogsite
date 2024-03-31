import { Component } from '@angular/core';
import { AichatService } from '../aichat.service';

interface Message {
  isUser: boolean;
  text: string;
}

interface Response {
  choices?: { text: string }[]
}
  

@Component({
  selector: 'app-aibot',
  templateUrl: './aibot.component.html',
  styleUrls: ['./aibot.component.css']
})
export class AibotComponent {
 /* inputText = '';
  messages: Message[] = [];

  constructor(private aichatService: AichatService) { }

  submit() {
    this.messages.push({
      isUser: true,
      text: this.inputText
    });
    this.aichatService.generateText(this.inputText).subscribe(
      (response: Response) => {
        if (!response) {
          this.messages.push({
            isUser: false,
            text: 'Error: no response received'
          });
        } else if (response.choices && response.choices.length>0) {
          this.messages.push({
            isUser: false,
            text: response.choices[0].text
          });
        } else {
          this.messages.push({
            isUser: false,
            text: 'Error: No choices found'
          });
        }
        this.inputText = '';
      },
      error => {
        console.error(error);
      }
    );
  }

  */




  



}
  