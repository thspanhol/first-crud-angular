import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

  constructor(private router: Router, private service: PensamentoService) {}

  listaPensamentos: Pensamento[] = [];

  navegarParaCriarPensamento = () => this.router.navigate(['/criarPensamento'])

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

}
