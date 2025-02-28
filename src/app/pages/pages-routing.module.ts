import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { authGuard } from '../guards/auth.guard';
import { AudioOutputComponent } from './audio-output/audio-output.component';

const routes: Routes = [
{  path: 'admin-panel',
    component: PagesComponent,children:[
      { path: 'usuarios', component: UsuariosComponent},
      { path:'usuario/:id', component:UsuarioComponent}
    ],
},
{ path: 'panelAudio', component: AudioOutputComponent}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
