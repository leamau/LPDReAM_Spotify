import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AccueilComponent } from "./accueil/accueil.component"
import { ListealbumComponent } from "./listealbum/listealbum.component"
import { ListechanteursComponent } from "./listechanteurs/listechanteurs.component"
import { DetailalbumComponent } from "./detailalbum/detailalbum.component"
import { DetailplaylistComponent } from "./detailplaylist/detailplaylist.component"
import { ListeplaylistComponent } from "./listeplaylist/listeplaylist.component"
 
 
 
export const appRoutes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'albums', component: ListealbumComponent },
    { path: 'chanteurs', component: ListechanteursComponent },
    { path: 'cd/:id', component: DetailalbumComponent },
    { path: 'playlists', component: ListeplaylistComponent },
    { path: 'playlist/:id', component: DetailplaylistComponent },

   ]