import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegularQuestionComponent } from './pages/regular-question/regular-question.component';
import { FlashQuestionComponentComponent } from './pages/flash-question-component/flash-question-component.component';
import { MiguelQuestionsComponent } from './pages/miguel-questions/miguel-questions.component';
import { LoseScreenComponent } from './pages/lose-screen/lose-screen.component';
import { WinScreenComponent } from './pages/win-screen/win-screen.component';

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
    },
    {
        path: 'migame/:game/:id',
        component: MiguelQuestionsComponent,
        title: 'Mig-Game',
    },
    {
        path: 'win',
        component: WinScreenComponent,
        title: 'Winner',
    },
    {
        path: 'loss',
        component: LoseScreenComponent,
        title: 'Lost',
    }
];
