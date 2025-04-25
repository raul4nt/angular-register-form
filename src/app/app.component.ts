import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormClientesComponent } from './components/form-clientes/form-clientes.component';
import { TabelaClientesComponent } from './components/tabela-clientes/tabela-clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormClientesComponent,
    TabelaClientesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']             
})
export class AppComponent {
  title = 'standalone-clients-app';
}
