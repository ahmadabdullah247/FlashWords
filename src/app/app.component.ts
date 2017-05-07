import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flash-words';
  dictionary;
  dicList;
  word;
  constructor(private http: Http) {
    this.http.get('assets/dictionary.json')
      .subscribe(res => {
        this.dictionary = res.json();
        this.dicList = Object.keys(this.dictionary);
        var x = this.dicList.pop();
        this.word = {
          word: x,
          type: this.dictionary[x].type,
          meaning: this.dictionary[x].meaning,
          synonyms: this.dictionary[x].synonyms,
        }
        return;
      });
    this.word = "yo";
  }

  public getOne() {
    if (this.dicList != undefined) {
      var x = this.dicList.pop();
      this.word = {
        word: x,
        type: this.dictionary[x].type,
        meaning: this.dictionary[x].meaning[0],
        synonyms: this.dictionary[x].synonyms[0],
      }
    }
  }
}
