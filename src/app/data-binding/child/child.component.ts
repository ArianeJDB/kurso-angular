import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/auth/confirm.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, CanComponentDeactivate {

  @Input() texto: string;
  @Output() sendAnswer = new EventEmitter<string>();

  id: string;
  params: object;
  out: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.out = false;
    this.id = this.activatedRoute.snapshot.params.id;
    this.params = this.activatedRoute.snapshot.queryParams.params;
    // this.activatedRoute.queryParams.subscribe((queryParams) => this.params = queryParams);
  }

  // onAnswer() {
  //   this.sendAnswer.emit('Hola, padre');
  // }
  ngOnChanges(): void {
    this.sendAnswer.emit('Hola, padre');
  }

  goOut() {
    this.out = true;
  }

  canDeactivate(): boolean {
    if (this.out) {
      return true;
    } else {
      return confirm('seguro?');
    }
  }

}
