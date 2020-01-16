import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EtviedanseSharedModule } from '../shared/shared.module';

import { CONTACT_ROUTE, ContactComponent } from './';

@NgModule({
  imports: [EtviedanseSharedModule, RouterModule.forRoot([CONTACT_ROUTE], { useHash: true })],
  declarations: [ContactComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EtviedanseAppContactModule {}
