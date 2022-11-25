import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import localeDe from '@angular/common/locales/de';

import { AppModule } from './app/app.module';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeDe);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
