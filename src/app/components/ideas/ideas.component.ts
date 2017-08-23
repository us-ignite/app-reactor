import { Component, OnInit } from '@angular/core';
import { Scenario } from '../../models/scenario';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  scenarios: Scenario[];

  constructor() { }

  ngOnInit() {
    this.scenarios = [
      {
        problem: 'Two or more people in different places need to simultaneously and collaboratively',
        solution: '',
        image: 'assets/images/BP2_2887.jpg',
        alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
        ideas: [
          {
            body: 'perform music',
            examples: [
              {
                app: 'LOLA',
                url: 'https://www.internet2.edu/vision-initiatives/initiatives/innovation-platform/'
              }
            ]
          }
        ]
      }
    ];
  }

}
