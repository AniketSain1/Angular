import { Routes } from '@angular/router';

import { Signal } from './components/signal/signal';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';

export const routes: Routes = [
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'attribute-directive',
        component: AttributeDirective
    }
];