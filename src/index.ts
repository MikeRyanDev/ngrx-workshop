import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './app/demo';
import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';

platformBrowserDynamic().bootstrapModule(AppModule);