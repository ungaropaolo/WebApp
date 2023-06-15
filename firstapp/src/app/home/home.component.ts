import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  user: User = {
    name : "nome",
    surname : "",
    operation: ""
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
