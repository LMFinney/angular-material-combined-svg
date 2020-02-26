# AngularMaterialCombinedSvg

This is a sample project to show the [external utility](https://www.npmjs.com/package/svgstore-cli),
the [registration code](src/app/app.module.ts), and the [template code](src/app/app.component.html)
that can be used to generate and use a single combined svg file for all the svg icons that an
Angular app using [MatIcon](https://material.angular.io/components/icon/overview) might need.

This app does not use the default font icons. CSS-Tricks
[explains](https://css-tricks.com/icon-fonts-vs-svg/) why you might want to do this.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Adding an additional icon to the set

1. Obtain an svg file. Good sources include the
   [official Material collection](https://material.io/resources/icons/?icon=warning&style=baseline)
   and [materialdesignicons.com](https://materialdesignicons.com/).
2. Add the .svg file to the `assets/svg` directory.
3. Run `yarn buildsprite` at the application root, which will update the `combined.svg` file.

## Using the icons in an app

- In the template, use the full name of the icon, like this:
  `<mat-icon svgIcon="done-24px"></mat-icon>`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically
reload if you change any of the source files.
