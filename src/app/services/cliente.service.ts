import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// ambos vem do RxJs, que é a biblioteca pra programação reativa do angular(e em js geral)
import { Cliente } from '../models/cliente.model';

@Injectable({
  // torna o serviço utilizável, basicamente(injetável)
  providedIn: 'root'
  // providedIn diz onde o angular vai providenciar(registrar) essa instância
  // no caso de root, ela ficará disponível para a aplicação inteira
})
export class ClienteService {

  private clientesSubject = new BehaviorSubject<Cliente[]>([])
  // valor inicial do BehaviorSubject neste caso será um array vazio
  // o BehaviorSubject é, basicamente, um tipo de observable
  // então a gente vai usar ele pra ser OBSERVADO pelos outros componentes(observers),
  // que, no caso da nossa aplicação, vai ser a TabelaClientes, e o nosso
  // FormClientes vai ser o "publisher"(chamará o método de adicionar cliente)
  private clientes: Cliente[] = []

  constructor() { }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente)
    this.clientesSubject.next([...this.clientes])
    // esse next vai emitir pra gente o valor atualizado pro nosso BehaviorSubject
    // é basicamente o cara que vai atualizar o dado
  }

  listarClientes(): Observable<Cliente[]> {
    return this.clientesSubject.asObservable()
    // nesse caso a gente usa o asObservable pois  queremos apenas OBSERVAR os dados(ao listar),
    // não faremos nenhuma alteração neles.
  }
}
