import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subgroup-add',
  templateUrl: './subgroup-add.component.html',
  styleUrls: ['./subgroup-add.component.css']
})
export class SubgroupAddComponent {
  subgroup = { id: '', name: '', description: '' }; // Incluindo id
  selectedOption: string = 'Informe os dados para o campo Id produto Grupo'; // Valor inicial

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica para salvar o novo subgrupo aqui
    console.log('Novo subgrupo adicionado:', this.subgroup);
    this.router.navigate(['/groups']); // Navega de volta para a lista de grupos após a adição
  }

  cancel() {
    this.router.navigate(['/groups']); // Navega de volta para a lista de grupos ao cancelar
  }

  onSelectionChange(event: any) {
    this.selectedOption = event.target.value;
    this.subgroup.id = this.selectedOption; // Atualiza o campo id com a opção selecionada
  }
}
