import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { LogoModule } from './components/logo/logo.module';
import { WelcomeBlockModule } from './components/welcome-block/welcome-block.module';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    LogoModule,
    WelcomeBlockModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
