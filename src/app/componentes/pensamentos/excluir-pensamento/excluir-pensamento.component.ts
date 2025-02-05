import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPeloId(parseInt(id!)).subscribe((pensamento) => this.pensamento = pensamento)
  };

  excluirPensamento = () => this.pensamento.id && this.service.excluir(this.pensamento.id).subscribe(this.cancelar);

  cancelar = () => this.router.navigate(['/listarPensamentos'])

}
