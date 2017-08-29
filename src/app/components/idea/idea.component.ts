import { Component, OnInit, Input } from '@angular/core';
import { Scenario, Idea, Example } from '../../models/scenario';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  @Input('scenario') scenario: Scenario;
  @Input('odd') odd: boolean;
  solution: string;
  showIdeas: boolean;
  examples: Example[];
  showExamples: boolean;
  mailTo: string;

  constructor() { }

  ngOnInit() {
    this.showIdeas = true;
    this.showExamples = false;
    this.examples = [];
  }

  toggleShowIdeas() {
    this.showIdeas = !this.showIdeas;
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
}
