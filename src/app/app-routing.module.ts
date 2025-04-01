import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PrivacySecurityComponent } from './privacy-security/privacy-security.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: RegistrationListComponent },
  { path: 'new', component: RegistrationFormComponent },
  { path: 'edit/:id', component: RegistrationFormComponent },
  { path: 'privacy-security', component: PrivacySecurityComponent },
  { path: 'help', component: HelpPageComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
