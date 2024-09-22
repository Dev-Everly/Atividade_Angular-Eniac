import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent   
{
 titulo = 'Bem-vindo ao meu projeto Angular!';
 descricao = 'Este é um projeto demonstrativo utilizando Angular Material.';
}

 
 
