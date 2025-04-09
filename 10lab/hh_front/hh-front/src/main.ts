// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Добавляем

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Предоставляем HttpClient глобально
  ]
}).catch(err => console.error(err));