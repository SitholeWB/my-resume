import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'resume';
  showFullCoverLetter: boolean = false;

  public toggleCoverLetter() {
    this.showFullCoverLetter = !this.showFullCoverLetter;
  }

}
