import { Component, OnInit, Input } from '@angular/core';
import { Scenario, Idea, Example } from '../../models/scenario';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss'],
  animations: [
    trigger('growShrink', [
      state('grow', style({
        transform: 'scale(1)'
      })),
      state('shrink', style({
        transform: 'scale(0)'
      })),
      transition('shrink => grow', animate('1000ms ease-in'))
    ])
  ]
})
export class IdeaComponent implements OnInit {
  @Input('scenario') scenario: Scenario;
  @Input('odd') odd: boolean;
  solution: string;
  showIdeas: boolean;
  examples: Example[];
  showExamples: boolean;
  mailTo: string;
  growState = 'shrink';

  constructor() { }

  ngOnInit() {
    this.showIdeas = false;
    this.showExamples = false;
    this.examples = [];
  }

  toggleShowIdeas() {
    this.showIdeas = !this.showIdeas;
    this.animateGrow();
  }

  resetExample() {
    if (this.showExamples) {
      this.examples = [];
    }
    this.showExamples = false;
  }

  addSolution(solution: string, examples: Example[]) {
    this.solution = solution;
    this.showExamples = false;
    if (examples.length > 0) {
      this.showExamples = true;
    }
    this.examples = examples;
  }

  setMailTo() {
    const linkText: string[] = ['mailto:?'];
    linkText.push('subject=' + encodeURI('Gigabit App Idea from US Ignite'));
    linkText.push('cc=' + encodeURI('scott.turnbull@us-ignite.org'));
    linkText.push('body=' +  encodeURI('You created the following at the US Ignite Gig App Generator\n\n' + this.scenario.problem + ' ' + this.solution + '.'));
    this.mailTo = linkText.join('&');
  }

  /* grossly hacky but short on time */
  animateGrow() {
    this.growState = (this.growState === 'shrink' ? 'grow' : 'shrink');
  }
}
