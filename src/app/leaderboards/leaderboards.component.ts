import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {
  public _40x40scoresHard: any;
  public _7x7scoresEasy: any;
  public _7x7scoresMedium: any;
  public _7x7scoresHard: any;
  public _7x7scoresExtreme: any;
  public _10x10scoresEasy: any;
  public _10x10scoresMedium: any;
  public _10x10scoresHard: any;
  public _10x10scoresExtreme: any;
  public _25x25scoresExtreme: any;
  public _15x15scoresHard: any;
  public _100x100scoresHard: any;
  public _100x100scoresExtreme: any;
  public _15x15scoresExtreme: any;
  public _25x25scoresHard: any;
  public _40x40scoresExtreme: any;
  public _15x15scoresEasy: any;
  public _15x15scoresMedium: any;
  public _25x25scoresEasy: any;
  public _25x25scoresMedium: any;
  public _40x40scoresEasy: any;
  public _40x40scoresMedium: any;
  public _100x100scoresEasy: any;
  public _100x100scoresMedium: any;
  public _80x80scoresEasy: any;
  public _80x80scoresMedium: any;
  public _80x80scoresHard: any;
  public _80x80scoresExtreme: any;
  public _60x60scoresEasy: any;
  public _60x60scoresMedium: any;
  public _60x60scoresHard: any;
  public _60x60scoresExtreme: any;
  public _dailyScores: any;
  public _dailyScoresMedium: any;
  public _dailyScoresEasy: any;
  public _dailyScoresExtreme: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://woohoojinbridges.firebaseio.com/dailyScores.json?orderBy="$key"')
      .subscribe((data) => {
        this._dailyScores = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._dailyScores.push(data[key]);
        }
        this._dailyScores.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._dailyScores.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/dailyScores/'+this._dailyScores[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._dailyScores = this._dailyScores.slice(0, 10);
      });

          this.http.get('https://woohoojinbridges.firebaseio.com/dailyScoresEasy.json?orderBy="$key"')
      .subscribe((data) => {
        this._dailyScoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._dailyScoresEasy.push(data[key]);
        }
        this._dailyScoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._dailyScoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/dailyScoresEasy/'+this._dailyScoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._dailyScoresEasy = this._dailyScoresEasy.slice(0, 10);
      });

          this.http.get('https://woohoojinbridges.firebaseio.com/dailyScoresMedium.json?orderBy="$key"')
      .subscribe((data) => {
        this._dailyScoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._dailyScoresMedium.push(data[key]);
        }
        this._dailyScoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._dailyScoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/dailyScoresMedium/'+this._dailyScoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._dailyScoresMedium = this._dailyScoresMedium.slice(0, 10);
      });

          this.http.get('https://woohoojinbridges.firebaseio.com/dailyScoresExtreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._dailyScoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._dailyScoresExtreme.push(data[key]);
        }
        this._dailyScoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._dailyScoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/dailyScoresExtreme/'+this._dailyScoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._dailyScoresExtreme = this._dailyScoresExtreme.slice(0, 10);
      });

    this.http.get('https://woohoojinbridges.firebaseio.com/40x40hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._40x40scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._40x40scoresHard.push(data[key]);
        }
        this._40x40scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._40x40scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/40x40hard/'+this._40x40scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._40x40scoresHard = this._40x40scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/7x7easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._7x7scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._7x7scoresEasy.push(data[key]);
        }
        this._7x7scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._7x7scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/7x7easy/'+this._7x7scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._7x7scoresEasy = this._7x7scoresEasy.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/7x7hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._7x7scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._7x7scoresHard.push(data[key]);
        }
        this._7x7scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._7x7scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/7x7hard/'+this._7x7scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._7x7scoresHard = this._7x7scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/7x7medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._7x7scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._7x7scoresMedium.push(data[key]);
        }
        this._7x7scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._7x7scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/7x7medium/'+this._7x7scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._7x7scoresMedium = this._7x7scoresMedium.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/7x7extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._7x7scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._7x7scoresExtreme.push(data[key]);
        }
        this._7x7scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._7x7scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/7x7extreme/'+this._7x7scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._7x7scoresExtreme = this._7x7scoresExtreme.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/25x25extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._25x25scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._25x25scoresExtreme.push(data[key]);
        }
        this._25x25scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._25x25scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/25x25extreme/'+this._25x25scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._25x25scoresExtreme = this._25x25scoresExtreme.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/15x15hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._15x15scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._15x15scoresHard.push(data[key]);
        }
        this._15x15scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._15x15scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/15x15hard/'+this._15x15scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._15x15scoresHard = this._15x15scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/100x100hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._100x100scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._100x100scoresHard.push(data[key]);
        }
        this._100x100scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._100x100scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/100x100hard/'+this._100x100scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._100x100scoresHard = this._100x100scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/100x100extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._100x100scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._100x100scoresExtreme.push(data[key]);
        }
        this._100x100scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._100x100scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/100x100extreme/'+this._100x100scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._100x100scoresExtreme = this._100x100scoresExtreme.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/15x15extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._15x15scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._15x15scoresExtreme.push(data[key]);
        }
        this._15x15scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._15x15scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/15x15extreme/'+this._15x15scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._15x15scoresExtreme = this._15x15scoresExtreme.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/25x25hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._25x25scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._25x25scoresHard.push(data[key]);
        }
        this._25x25scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._25x25scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/25x25hard/'+this._25x25scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._25x25scoresHard = this._25x25scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/40x40extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._40x40scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._40x40scoresExtreme.push(data[key]);
        }
        this._40x40scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._40x40scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/40x40extreme/'+this._40x40scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._40x40scoresExtreme = this._40x40scoresExtreme.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/10x10extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._10x10scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._10x10scoresExtreme.push(data[key]);
        }
        this._10x10scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._10x10scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/10x10extreme/'+this._10x10scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._10x10scoresExtreme = this._10x10scoresExtreme.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/10x10hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._10x10scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._10x10scoresHard.push(data[key]);
        }
        this._10x10scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._10x10scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/10x10hard/'+this._10x10scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._10x10scoresHard = this._10x10scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/10x10medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._10x10scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._10x10scoresMedium.push(data[key]);
        }
        this._10x10scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._10x10scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/10x10medium/'+this._10x10scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._10x10scoresMedium = this._10x10scoresMedium.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/10x10easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._10x10scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._10x10scoresEasy.push(data[key]);
        }
        this._10x10scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._10x10scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/10x10easy/'+this._10x10scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._10x10scoresEasy = this._10x10scoresEasy.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/15x15medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._15x15scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._15x15scoresMedium.push(data[key]);
        }
        this._15x15scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._15x15scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/15x15medium/'+this._15x15scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._15x15scoresMedium = this._15x15scoresMedium.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/15x15easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._15x15scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._15x15scoresEasy.push(data[key]);
        }
        this._15x15scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._15x15scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/15x15easy/'+this._15x15scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._15x15scoresEasy = this._15x15scoresEasy.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/25x25medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._25x25scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._25x25scoresMedium.push(data[key]);
        }
        this._25x25scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._25x25scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/25x25medium/'+this._25x25scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._25x25scoresMedium = this._25x25scoresMedium.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/25x25easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._25x25scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._25x25scoresEasy.push(data[key]);
        }
        this._25x25scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._25x25scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/25x25easy/'+this._25x25scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._25x25scoresEasy = this._25x25scoresEasy.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/40x40medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._40x40scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._40x40scoresMedium.push(data[key]);
        }
        this._40x40scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._40x40scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/40x40medium/'+this._40x40scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._40x40scoresMedium = this._40x40scoresMedium.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/40x40easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._40x40scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._40x40scoresEasy.push(data[key]);
        }
        this._40x40scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._40x40scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/40x40easy/'+this._40x40scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._40x40scoresEasy = this._40x40scoresEasy.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/100x100medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._100x100scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._100x100scoresMedium.push(data[key]);
        }
        this._100x100scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._100x100scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/100x100medium/'+this._100x100scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._100x100scoresMedium = this._100x100scoresMedium.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/100x100easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._100x100scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._100x100scoresEasy.push(data[key]);
        }
        this._100x100scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._100x100scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/100x100easy/'+this._100x100scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._100x100scoresEasy = this._100x100scoresEasy.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/80x80extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._80x80scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._80x80scoresExtreme.push(data[key]);
        }
        this._80x80scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._80x80scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/80x80extreme/'+this._80x80scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._80x80scoresExtreme = this._80x80scoresExtreme.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/80x80hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._80x80scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._80x80scoresHard.push(data[key]);
        }
        this._80x80scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._80x80scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/80x80hard/'+this._80x80scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._80x80scoresHard = this._80x80scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/80x80medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._80x80scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._80x80scoresMedium.push(data[key]);
        }
        this._80x80scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._80x80scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/80x80medium/'+this._80x80scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._80x80scoresMedium = this._80x80scoresMedium.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/80x80easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._80x80scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._80x80scoresEasy.push(data[key]);
        }
        this._80x80scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._80x80scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/80x80easy/'+this._80x80scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._80x80scoresEasy = this._80x80scoresEasy.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/60x60extreme.json?orderBy="$key"')
      .subscribe((data) => {
        this._60x60scoresExtreme = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._60x60scoresExtreme.push(data[key]);
        }
        this._60x60scoresExtreme.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._60x60scoresExtreme.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/60x60extreme/'+this._60x60scoresExtreme[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._60x60scoresExtreme = this._60x60scoresExtreme.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/60x60hard.json?orderBy="$key"')
      .subscribe((data) => {
        this._60x60scoresHard = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._60x60scoresHard.push(data[key]);
        }
        this._60x60scoresHard.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._60x60scoresHard.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/60x60hard/'+this._60x60scoresHard[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._60x60scoresHard = this._60x60scoresHard.slice(0, 10);
        
      });

      this.http.get('https://woohoojinbridges.firebaseio.com/60x60medium.json?orderBy="$key"')
      .subscribe((data) => {
        this._60x60scoresMedium = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._60x60scoresMedium.push(data[key]);
        }
        this._60x60scoresMedium.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._60x60scoresMedium.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/60x60medium/'+this._60x60scoresMedium[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._60x60scoresMedium = this._60x60scoresMedium.slice(0, 10);
        
      });
      this.http.get('https://woohoojinbridges.firebaseio.com/60x60easy.json?orderBy="$key"')
      .subscribe((data) => {
        this._60x60scoresEasy = [];
        for(const key of Object.keys(data)) {
          var temp = data[key];
          (data[key])['time'] = (temp.hours ? (temp.hours > 9 ? temp.hours : "0" + temp.hours) : "00") + ":" + (temp.minutes ? (temp.minutes > 9 ? temp.minutes : "0" + temp.minutes) : "00") + ":" + (temp.seconds > 9 ? temp.seconds : "0" + temp.seconds) + "." + (temp.millis > 9 ? temp.millis : "0"+temp.millis);
          (data[key])['key'] = key;
          this._60x60scoresEasy.push(data[key]);
        }
        this._60x60scoresEasy.sort(function(a, b) {
          var aTime = (360000*a.hours) + (6000*a.minutes) + (100*a.seconds) + (a.millis);
          var bTime = (360000*b.hours) + (6000*b.minutes) + (100*b.seconds) + (b.millis);
          if(aTime < bTime) return -1;
          if(aTime > bTime) return 1;
          return 0;
        });
        var index = 10;
        for(index = 10; index < this._60x60scoresEasy.length; index++) {
          this.http.delete('https://woohoojinbridges.firebaseio.com/60x60easy/'+this._60x60scoresEasy[index].key+'.json')
            .subscribe((data) => {
            });
        }
        this._60x60scoresEasy = this._60x60scoresEasy.slice(0, 10);
        
      });
  }

  mainMenu()
  {
     /*   let m = {
          name: "Leah",
          hours: 3,
          minutes: 40,
          seconds: 26,
          millis: 83
      };
      this.http.post('https://woohoojinbridges.firebaseio.com/100x100extreme.json', m)
          .subscribe((data) => {
          this.router.navigate(['leaderboards']);
      });*/
      this.router.navigate(['mainMenu']);
  }

}