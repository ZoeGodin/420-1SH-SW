import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegularQuestionComponent } from './pages/regular-question/regular-question.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'question/:game/:id',
        component: RegularQuestionComponent,
        title: 'InfoFeud'
    },

];
