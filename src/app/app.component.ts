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
        this.word=this.dicList.pop();
        console.log(this.word);
        return;
      });
  }

  public getOne() {
    if (this.dicList != undefined) {
      this.word = this.dicList.pop();
    }
  }
}
