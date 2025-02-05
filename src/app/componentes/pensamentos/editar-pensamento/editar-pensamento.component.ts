import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPeloId(parseInt(id!)).subscribe((pensamento) => this.pensamento = pensamento)
  }

  editarPensamento = () => {
    this.service.editar(this.pensamento).subscribe(this.cancelar)
  }

  cancelar = () => this.router.navigate(['/listarPensamentos'])


}
