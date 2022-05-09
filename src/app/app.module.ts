import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './views/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './shared/service/authentication.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { MapaComponent } from './views/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';
import { UsuarioModalComponent } from './views/usuario/modal/usuario.modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UsuarioComponent,
    PerfilComponent,
    MapaComponent,
    UsuarioModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2NVuqxeoa7ql7S55IyYtkqfqaPapVArE&callback=initMap&v=weekly'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
