import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { Ecommerce } from '../../ecommerce';
import { MatIcon } from "@angular/material/icon";
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIcon, ReactiveFormsModule], 
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  magazzino= inject(Ecommerce)
  private router = inject(Router);
  catalogo = this.magazzino.getCatalogo()
  prodotto: {nome: string; pezzi: number} = {nome: "", pezzi: 0}
  homeform = new FormGroup({
      nome: new FormControl<string>('', [Validators.required, Validators.maxLength(5)]), 
      pezzi: new FormControl(0, [Validators.required, Validators.min(1)])
    })

  navigateTo(){
    this.router.navigate(['/pagina1']);
  }

  aggiungiMagazzino(prodotto: {nome: string, pezzi: number}){
    if(this.homeform.value.nome != null){
      prodotto.nome = this.homeform.value.nome
    } if(this.homeform.value.pezzi != null){
      prodotto.pezzi = this.homeform.value.pezzi
    }
    this.magazzino.aggiungiProdotto(this.prodotto)
  }

}

