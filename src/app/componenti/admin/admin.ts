import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { Ecommerce } from '../../ecommerce';
import {MatButtonModule} from '@angular/material/button';
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
      nome: new FormControl('', Validators.maxLength(5)),
      pezzi: new FormControl(0, Validators.min(0))
    })

  navigateTo(){
    this.router.navigate(['/pagina1']);
  }

  getMagazzino(){
    return this.magazzino
  }

  aggiungiMagazzino(prodotto: {nome: string, pezzi: number}){
    this.magazzino.aggiungiProdotto(prodotto)
  }

}
