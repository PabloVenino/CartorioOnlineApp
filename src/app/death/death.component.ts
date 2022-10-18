import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeathApiService } from './death-api.service';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})

export class DeathComponent implements OnInit {

  deathList$!:Observable<any[]>;
  
  constructor(private service: DeathApiService) { }

  ngOnInit(): void {
    this.deathList$ = this.service.getDeathList();
  }

}
