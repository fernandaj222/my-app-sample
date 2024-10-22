import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  // inputs: label, color, disabled
  @Input() label: string = 'Default label';
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;

  // outputs
  @Output() clicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.clicked.emit(this.label);
  }
}
