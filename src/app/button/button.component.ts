

import { Component, Input, OnInit } from '@angular/core';
import { ButtonConfiguration } from 'src/models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfiguration?: ButtonConfiguration;

  constructor() {}

  ngOnInit() {}
}

