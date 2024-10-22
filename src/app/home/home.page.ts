import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  disabled: boolean = true;
  label: string = 'My button from .ts';
  color: 'primary' | 'secondary' = 'primary';

  constructor() {}

  onCustomButtonClicked(args: any) {
    console.log(args);
  }
}
