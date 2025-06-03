import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Question1Component } from './pages/game1/question1/question1.component';
import { Question2Component } from './pages/game1/question2/question2.component';
import { Question3Component } from './pages/game1/question3/question3.component';
import { Question4Component } from './pages/game1/question4/question4.component';
import { Question1Game2Component } from './pages/game2/question1/question1.component';
import { Question2Game2Component } from './pages/game2/question2/question2.component';
import { Question3Game2Component } from './pages/game2/question3/question3.component';
import { Question4Game2Component } from './pages/game2/question4/question4.component';
import { Question1DemoComponent } from './pages/demo/question1/question1.component';
import { Question2DemoComponent } from './pages/demo/question2/question2.component';
import { RegularQuestionComponent } from './pages/regular-question/regular-question.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'game1-question1',
        component: Question1Component,
        title: 'Question 1',
    },
    {
        path: 'game1-question2',
        component: Question2Component,
        title: 'Question 2',
    },
    {
        path: 'game1-question3',
        component: Question3Component,
        title: 'Question 3',
    },
    {
        path: 'game1-question4',
        component: Question4Component,
        title: 'Question 4',
    },
    {
        path: 'game2-question1',
        component: Question1Game2Component,
        title: 'Question 1',
    },
    {
        path: 'game2-question2',
        component: Question2Game2Component,
        title: 'Question 2',
    },
    {
        path: 'game2-question3',
        component: Question3Game2Component,
        title: 'Question 3',
    },
    {
        path: 'game2-question4',
        component: Question4Game2Component,
        title: 'Question 4',
    },
    {
        path: 'demo-question1',
        component: Question1DemoComponent,
        title: 'Question 1 (DEMO)',
    },
    {
        path: 'demo-question2',
        component: Question2DemoComponent,
        title: 'Question 2 (DEMO)',
    },
    {
        path: 'question/:game/:id',
        component: RegularQuestionComponent,
        title: 'InfoFeud - REGULAR QUESTIONS'
    }

];
