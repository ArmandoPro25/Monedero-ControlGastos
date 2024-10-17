import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TweetService } from '../../services/tweet.service';  
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit {
  
    tweets: any[] = [];  // Variable para almacenar los tweets
  
    constructor(
      private tweetService: TweetService,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}
  
    ngOnInit() {
      this.loadTweets();  // Cargar los tweets al inicializar el componente
    }
  
    loadTweets() {
      this.tweetService.getTweets().subscribe(
        data => {
          this.tweets = data;
        },
        error => {
          console.error('Error al obtener tweets', error);
        }
      );
    }
  }
  
