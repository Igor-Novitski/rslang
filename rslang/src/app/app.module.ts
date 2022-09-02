import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HomepageModule } from "./pages/homepage/homepage.module";
import { AuthorizationModule } from './pages/authorization/authorization.module';
import { TextbookModule } from './pages/textbook/textbook.module';
import { HttpClientModule } from '@angular/common/http';
import { SprintGameModule } from './pages/sprint-game/sprint-game.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HomepageModule,
      AuthorizationModule,
      TextbookModule,
      HttpClientModule,
      SprintGameModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
