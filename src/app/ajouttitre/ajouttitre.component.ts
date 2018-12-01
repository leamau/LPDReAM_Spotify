import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-ajouttitre',
  templateUrl: './ajouttitre.component.html',
  styleUrls: ['./ajouttitre.component.css']
})
export class AjouttitreComponent implements OnInit {

  private playlists : Object[];
  uriTrack : number

  constructor(private dialogRef: MatDialogRef<AjouttitreComponent>,private spotService : SpotifyService) {

  }

  ngOnInit() {
    this.chercherPlaylists()
  }

  chercherPlaylists(){
    this.spotService.getPlaylists().subscribe((resultat) =>{
    this.playlists=resultat["items"]
    console.log(resultat)
    });
  }

  addTrack(idPlaylist,position){
    console.log(idPlaylist,this.uriTrack);
    var track ={"uris":[this.uriTrack]}
    this.spotService.AddTrack(idPlaylist,track)

  }

  close() {
      this.dialogRef.close();
  }
}
