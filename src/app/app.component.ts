import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myVectors';
  activeContent: string = 'btn1';
  openModal(contentId: any) {
    switch (contentId) {
      case 'btn1':
        this.activeContent = "btn1";
        break;
      case 'btn2':
        this.activeContent = "btn2";
        break;
      case 'btn3':
        this.activeContent = "btn3";
        break;
      case 'btn4':
        this.activeContent = "btn4";
        break;
      case 'btn5':
        this.activeContent = "btn5";
        break;
      case 'btn6':
        this.activeContent = "btn6";
        break;

    }
  }
}
