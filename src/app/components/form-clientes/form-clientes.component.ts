import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  standalone: true,
  selector: 'app-form-clientes',
  imports: [CommonModule, ReactiveFormsModule],
  // precisamos do ReactiveFormsModule pra ter acesso as coisas referentes aos Forms
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent {
    clienteForm: FormGroup
    // criamos nosso FormGroup, que vai ser basicamente um form isolado(a base)

    constructor(
      private fb: FormBuilder,
      // e instanciamos o builder, que vai alterar o formgroup
      private clienteService: ClienteService
    ) {
      this.clienteForm = this.fb.group({
        // validators -> validam os campos. existem varios, como o especifico pra email, required, etc
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required],
        dataNascimento: ['', Validators.required],
        // iniciamos cada campo com ''(vazio) e usamos os validators pra fazer as regras
      })
    }

    onSubmit(): void {
      if (this.clienteForm.invalid) return;
      // se tiver invalido, retornamos pra nao ter risco de erro

      const form = this.clienteForm.value
      // pegamos o valor do nosso form
      const novoCliente: Cliente = {
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        dataNascimento: new Date(form.dataNascimento)
      }

      this.clienteService.adicionarCliente(novoCliente)
      // adicionamos como um novoCliente
      this.clienteForm.reset()
      // e resetamos nosso form(valores)

    }

}
