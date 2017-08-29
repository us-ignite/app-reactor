export interface Scenario {
  problem: string;
  image: string;
  img_alt_text: string;
  ideas: Idea[];
}

interface Idea {
  text: string;
  examples: Example[];
}

interface Example {
  name: string;
  url: string;
}

