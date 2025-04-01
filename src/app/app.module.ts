import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PrivacySecurityComponent } from './privacy-security/privacy-security.component';
import { HelpPageComponent } from './help-page/help-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PrivacySecurityComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
