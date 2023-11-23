import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-translator';
  // text: string;
  // translatedText: string;
  text = '';
  translatedText = '';

  constructor(private translateService: TranslateService) {}

  onTextInput(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
  }

  submit() {
    this.translateService.translate(this.text).subscribe((result) => {
      this.translatedText = result;
    });
  }
}
