import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})


export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  senhaNaoConfere: boolean = false;

  onSubmit() {
    if (this.senha !== this.confirmarSenha) {
      this.senhaNaoConfere = true;
      return;
    }
    this.senhaNaoConfere = false;

    console.log('Nome:', this.nome);
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
  }

}
