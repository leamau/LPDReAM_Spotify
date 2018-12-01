import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../spotify.service';
import { ListeplaylistComponent } from '../listeplaylist/listeplaylist.component';
import { AjouttitreComponent } from '../ajouttitre/ajouttitre.component';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})


export class DetailalbumComponent implements OnInit {

  private idalbum : string ;
  private album : Object;
  fileNameDialogRef: MatDialogRef<AjouttitreComponent>;

  constructor(private spotService : SpotifyService ,private route:ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit() {
    this.idalbum = this.route.snapshot.params["id"]
    this.spotService.getAlbum(this.idalbum).subscribe(
        (res) =>{
        this.album = res
        console.log(this.album)
    })
  }

  openDialog(uriTrack) {

    this.fileNameDialogRef = this.dialog.open(AjouttitreComponent);
    this.fileNameDialogRef.componentInstance.uriTrack = uriTrack;
  }

}
