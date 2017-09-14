# AppReactor

This is a prototype page for the online version of the US Ignite Application Generator.  It's a port of the project in the AppReactor repository, which I expect to delete once the port is done.

Visit us at [us-ignite.org](https://us-ignite.org)

## Development
This is a standard angular 4 app without services to worry about. 

1. Install node.js on your local system and `npm install -g @angular/cli typescript`
1. Clone the repository.
1. cd to project directory and install dependencies via `npm install`
1. Serve just like any other angular app `ng serve --open`

## Building

Build via the standard `ng build` command. If deploying to subdirectory you can set the base href value through ng build like so:
```bash
ng build --base-href=/app-reactor/
```

## Publishing

For testing we're using github-pages and deploying via thoughts from the post by @cobyism [here](https://gist.github.com/cobyism/4730490).  Run the actual build as above, commit those changes and push them to github, then do a subtree push via:
```
git subtree push --prefix dist origin gh-pages
```

## Credits
* Theme based on [Spectral theme by HTML5 UP](https://html5up.net/) originally provided for the Jekyll Framework.
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

