import { Component, OnInit, Input } from '@angular/core';
import { Scenario } from '../../models/scenario';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  @Input('scenario') scenario: Scenario;
  solution: string;

  constructor() { }

  ngOnInit() {
  }

}
