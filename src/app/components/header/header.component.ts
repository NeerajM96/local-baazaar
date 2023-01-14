import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  audioFlag = false;
  audio = new Audio()
  ngOnInit(): void {
    // this.audio.src = "../../assets/audio/on_my_way_64.mp3";
    // this.audio.muted;
    // this.audio.load()
    
  }

  toggleAudio(){  
    this.audioFlag = !this.audioFlag;  
    // if(this.audioFlag){
    //   this.audio.play()
    // }
    // else{
    //   this.audio.pause()
    // }
    
  }

}
