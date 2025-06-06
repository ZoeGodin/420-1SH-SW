import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegularQuestionComponent } from './pages/regular-question/regular-question.component';
import { FlashQuestionComponentComponent } from './pages/flash-question-component/flash-question-component.component';

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
    {
        path: 'flash-question/:game',
        component: FlashQuestionComponentComponent,
        title: 'InfoFeud - FLASH ROUND'
    }

];
