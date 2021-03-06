import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SprintComponent } from './sprint/sprint.component';
import { OngoingSprintComponent } from './sprint/ongoing-sprint/ongoing-sprint.component';
import { NewSprintComponent } from './sprint/new-sprint/new-sprint.component';
import { PastSprintsComponent } from './sprint/past-sprints/past-sprints.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthenticationService } from './authentication/authentication.service';
import { SprintService } from './sprint/sprint.service';
import { LoggedUserNameComponent } from './authentication/logged-user-name/logged-user-name.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { VersionTagComponent } from './welcome/version-tag/version-tag.component';
import { FilterPipe } from './pipe/filter.pipe';
import { DataTableModule } from 'angular-6-datatable';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    SprintComponent,
    OngoingSprintComponent,
    NewSprintComponent,
    PastSprintsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LoggedUserNameComponent,
    VersionTagComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  providers: [
    AuthenticationService,
    SprintService,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
