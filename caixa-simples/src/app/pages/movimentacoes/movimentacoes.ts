import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Topbar } from '../../layout/topbar/topbar';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-movimentacoes',
  imports: [RouterLink, Sidebar, Topbar, FormsModule, CommonModule, NgClass],
  templateUrl: './movimentacoes.html',
  styleUrl: './movimentacoes.css',
})
export class Movimentacoes {
  mensagem: string = '';
  mostrarNotificacao: boolean = false;
  tipoNotificacao: string = "";

  showModal = false;

  abrirModal() {

    this.showModal = true;
  }

  fecharModal() {
    this.showModal = false;
  }



  descricoes: string[] = [];
  categorias: string[] = [];
  tipos: string[] = [];
  valores: number[] = [];
  datas: string[] = [];
  pagamentos: string[] = [];

  descricao: string = "";
  categoria: string = "";
  tipo: string = "";
  valor: number | null = null;
  pagamento: string = "";

  indiceParaEditar: number = -1;


  mostrarMensagem(texto: string, tipo: string): void {
    this.mensagem = texto;
    this.tipoNotificacao = tipo;
    this.mostrarNotificacao = true;

    setTimeout(() => {
      this.mostrarNotificacao = false;
    }, 3000);
  }

  salvar(): void {
    if (this.indiceParaEditar === -1) {
      this.salvarMovimentacao();
    } else {
      this.editar();
    }



    if (this.mostrarNotificacao && this.tipoNotificacao === 'sucesso') {
      this.descricao = '';
      this.categoria = '';
      this.tipo = '';
      this.valor = null;
      this.pagamento = '';
      this.indiceParaEditar = -1;
      this.fecharModal();
    }
  }

  salvarMovimentacao(): void {
    if (this.descricao === '' ||
      this.categoria === '' ||
      this.tipo === '' ||
      this.pagamento === '' ||
      this.valor === null || this.valor <= 0) {
      this.mostrarMensagem("Preencha todos os campos corretamentete", "erro");
      return;
    }

    this.descricoes.push(this.descricao);
    this.categorias.push(this.categoria);
    this.tipos.push(this.tipo);
    this.valores.push(this.valor);
    this.pagamentos.push(this.pagamento);
    this.datas.push(new Date().toLocaleDateString('pt-BR'));

    this.mostrarMensagem("Movimentação realizada com sucesso!", "sucesso");

  }

  preencherCampoEditar(movimentacaoDescricao: string, movimentacaoCategoria: string, movimentacaoTipo: string, movimentacaoPagamento: string, movimentacaoValor: number): void {
    this.indiceParaEditar = this.descricoes.indexOf(movimentacaoDescricao);

    this.descricao = movimentacaoDescricao;
    this.categoria = movimentacaoCategoria;
    this.tipo = movimentacaoTipo;
    this.valor = movimentacaoValor;
    this.pagamento = movimentacaoPagamento;
  }

  editar(): void {
    if (this.descricao === '' ||
      this.categoria === '' ||
      this.tipo === '' ||
      this.pagamento === '' ||
      this.valor === null || this.valor <= 0) {
      this.mostrarMensagem("Preencha todos os campos corretamentete", "erro");
      return;
    }

    this.descricoes[this.indiceParaEditar] = this.descricao;
    this.categorias[this.indiceParaEditar] = this.categoria;
    this.tipos[this.indiceParaEditar] = this.tipo;
    this.pagamentos[this.indiceParaEditar] = this.pagamento;
    this.valores[this.indiceParaEditar] = this.valor;


    this.mostrarMensagem("Alteração realizada com sucesso!", "sucesso");

    this.indiceParaEditar = -1;
  }



  apagar(indice: number): void {
    this.descricoes.splice(indice, 1);
    this.categorias.splice(indice, 1);
    this.tipos.splice(indice, 1);
    this.valores.splice(indice, 1);
    this.datas.splice(indice, 1);
    this.pagamentos.splice(indice, 1);
  }


}








