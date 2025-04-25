import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabela-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css'],
})
export class TabelaClientesComponent implements OnInit {
  clientes$: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService) {
    this.clientes$ = this.clienteService.listarClientes();
  }

  ngOnInit(): void {}
  // implementos aquele OnInit e usamos o ngOnInit pois estamos usando Observale
  // entao, a lista de clientes vai ser automaticamente populada no momento que o
  // componente for carregado :^)
}
