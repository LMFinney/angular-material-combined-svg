import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    /*
     * combined.svg is a generated file. We use the 'buildsprite' npm script to combine all of the
     * svgs in assets/icons/svg into one file.
     *
     * Steps to adding a new icon:
     * 1. Obtain an svg file. Good sources include the official Material collection at
     * https://material.io/resources/icons/?icon=warning&style=baseline and
     * https://materialdesignicons.com/.
     * 2. Place the icon file in the assets/svg directory.
     * 3. Run `yarn buildsprite`, which will update the combined.svg file.
     * 4. Use the icon like this: `<mat-icon svgIcon="done-24px"></mat-icon>`. The material icon
     * registry will extract the icon from the combined file.
     */
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/combined.svg')
    );
  }
}
