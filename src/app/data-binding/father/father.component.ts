import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from 'src/app/first.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  texto: string;
  answer: string;
  constructor(private firstService: FirstService, private router: Router) { }

  ngOnInit(): void {
  }

  showAlert() {
    this.texto = this.firstService.getMessage();
  }

  getAnswer(answer: string) {
    this.answer = answer;
  }

  goToDirectives() {
    this.router.navigate(['directives']);
  }


}
