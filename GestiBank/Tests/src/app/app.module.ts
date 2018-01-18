import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; /* ******** */


import { AppComponent } from './app.component';
import { FormTestComponent } from './form-test/form-test.component';
import { ConseillerDetailComponent } from './conseiller-detail/conseiller-detail.component';
import { ConseillersListComponent } from './conseillers-list/conseillers-list.component';

import { ConseillerService } from './conseiller-service';


@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    ConseillerDetailComponent,
    ConseillersListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // *************
    FormsModule
  ],
  providers: [ ConseillerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
