import { MatSidenavModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpotifyService } from './spotify.service';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <== add the imports!
import { MatListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material';
import { AccueilComponent } from './accueil/accueil.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { ListeplaylistComponent } from './listeplaylist/listeplaylist.component';
import { DetailplaylistComponent } from './detailplaylist/detailplaylist.component';
import { MatDialogModule } from '@angular/material';
import { AjouttitreComponent } from './ajouttitre/ajouttitre.component';
import { MatDialog, MatDialogRef } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ListealbumComponent,
    AccueilComponent,
    ListechanteursComponent,
    DetailalbumComponent,
    ListeplaylistComponent,
    DetailplaylistComponent,
    AjouttitreComponent,
  ],
  entryComponents: [
    AjouttitreComponent
  ],
 
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
