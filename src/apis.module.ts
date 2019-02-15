import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SessionService } from './app/session.service';

@NgModule({})
export class APIsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: APIsModule,
      providers: [
        SessionService
      ],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: APIsModule,
  ) {
    if (parentModule) {
      throw new Error('APIsModule is already loaded. Import it in the AppModule only');
    }
  }
}
