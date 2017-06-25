import { HashLocationStrategy, PlatformLocation } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

const routes : Routes = [
  { path : '', component : HomeComponent},
  { path : 'quiz', component : QuizComponent}
]

export const routing = RouterModule.forRoot(routes);