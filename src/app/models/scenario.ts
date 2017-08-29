export interface Scenario {
  problem: string;
  image: string;
  img_alt_text: string;
  ideas: Idea[];
}

export interface Idea {
  text: string;
  examples: Example[];
}

export interface Example {
  name: string;
  url: string;
}

