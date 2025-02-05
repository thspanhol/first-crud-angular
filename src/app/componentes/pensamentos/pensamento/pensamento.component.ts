import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Teste Angular.',
    autoria: 'Thales Spanhol',
    modelo: 'modelo3'
  };

  constructor(private router: Router) {}

  larguraPensamento = (): String => this.pensamento.conteudo.length >= 256 ? "pensamento-g" : "pensamento-p";

  navegarParaExcluirPensamento = (id: number) => this.router.navigate(['/pensamentos/excluirPensamento/' + id])

  navegarParaEditarPensamento = (id: number) => this.router.navigate(['/pensamentos/editarPensamento/' + id])  

}
