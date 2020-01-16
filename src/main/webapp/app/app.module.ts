import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EtviedanseSharedModule } from 'app/shared/shared.module';
import { EtviedanseCoreModule } from 'app/core/core.module';
import { EtviedanseAppRoutingModule } from './app-routing.module';
import { EtviedanseHomeModule } from './home/home.module';
import { EtviedanseEntityModule } from './entities/entity.module';
import { EtviedanseAppAboutUsModule } from './about-us/about-us.module';
import { EtviedanseAppContactModule } from './contact/contact.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    EtviedanseSharedModule,
    EtviedanseCoreModule,
    EtviedanseHomeModule,
    EtviedanseAppAboutUsModule,
    EtviedanseAppContactModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EtviedanseEntityModule,
    EtviedanseAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class EtviedanseAppModule {}
