import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {
  phrases: Observable<string>;
  protected: Observable<string>;

  constructor(private service: ChuckService) { }

  ngOnInit(): void {
    this.searchPhrases();
  }

  searchPhrases() {
    this.phrases = this.service.getPhrases();
  }

  searchProtectedQuote() {
    this.protected = this.service.getProtectedQuote();
  }

}
