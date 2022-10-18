import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BirthApiService } from './birth-api.service';
import { Observable, ObservedValueOf } from 'rxjs';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {

  birthList$!:Observable<any[]>;
  birthPost$!:Observable<any[]>;

  constructor(private service: BirthApiService) { }

  ngOnInit(): void {
    this.birthList$ = this.service.getBirthList();
  }

}
