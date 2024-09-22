import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';

export const routes: Routes = [
    {path: 'sobre',component:SobreComponent  },
    {path: '',component:HomeComponent  },
    {path: 'cadastro',component:CadastroComponent  },
    {path:'notfound', component:NotfoundComponent},
    {path: '**', redirectTo: 'notfound',pathMatch:'full' }
];
