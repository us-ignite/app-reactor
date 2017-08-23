export interface Scenario {
  problem: string;
  solution: string;
  image: string;
  alt_text: string;
  ideas: Idea[];
}

interface Idea {
  body: string;
  examples: Example[];
}

interface Example {
  app: string;
  url: string;
}

