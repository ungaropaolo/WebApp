import { Component, OnChanges, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, user } from '../user';
import { ProvaService } from '../services/prova.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  prova: ProvaService = inject(ProvaService);

  user = new user();
  
  /**
   *
   */
  constructor() {
    this.user = this.prova.getAll();
  }

  ngOnInit(): void {
    console.log("inizializzazione ngOnInit")
  }

  ngOnChanges(): void{

  }

  ngOnDestroy(): void{
    console.log("componente Home distrutto ngOnDestroy")
  }
}
