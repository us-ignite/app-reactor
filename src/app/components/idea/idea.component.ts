import { Component, OnInit, Input } from '@angular/core';
import { Scenario, Idea, Example } from '../../models/scenario';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  @Input('scenario') scenario: Scenario;
  solution: string;
  showIdeas: boolean;
  examples: Example[];
  watchChange: boolean;

  constructor() { }

  ngOnInit() {
    this.showIdeas = true;
    this.watchChange = false;
    this.examples = [];
  }

  toggleShowIdeas() {
    this.showIdeas = !this.showIdeas;
  }

  resetExample() {
    if (this.watchChange) {
      //this.examples = [];
    }
    this.watchChange = false;
  }

  addSolution(solution: string, examples: Example[]) {
    this.solution = solution;
    this.watchChange = true;
    this.examples = examples;
    console.log("addSolution Triggered");
  }

  mailTo() {
    console.log(this.scenario.problem + this.solution + '.');
  }
}
