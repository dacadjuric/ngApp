import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let faShoes =faShoePrints;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
