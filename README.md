# AppReactor

This is a prototype page for the online version of the US Ignite Application Generator.  It's a port of the project in the AppReactor repository, which I expect to delete once the port is done.

Visit us at [us-ignite.org](https://us-ignite.org)

## Build and Publish

For testing we're using github-pages and deploying via thoughts from the post by @cobyism [here](https://gist.github.com/cobyism/4730490).  To build run actual build via `ng build` then commit update and push the subtree to gh-pages via:
```
git subtree push --prefix dist origin gh-pages
```


## Credits

* Theme based on [Spectral theme by HTML5 UP](https://html5up.net/) originally provided for the Jekyll Framework.
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

