import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { TaskComponent } from './pages/task/task.component';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [

    //Manage routes

    {
        path: '',
        component: CounterComponent,
        
    },

    {
        path: 'task',
        component: TaskComponent
    },
    {
        path: 'dragonball',
        component: Dragonball
    },{
        path: 'dragonball-super',
        component: DragonballSuper
    },

    {
        path: '**',
        redirectTo: ''
    }

];
