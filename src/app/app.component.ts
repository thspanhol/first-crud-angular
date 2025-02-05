import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CriarPensamentoComponent } from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ListarPensamentosComponent } from "./componentes/pensamentos/listar-pensamentos/listar-pensamentos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentoComponent, FormsModule, ListarPensamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-crud-angular';
}
