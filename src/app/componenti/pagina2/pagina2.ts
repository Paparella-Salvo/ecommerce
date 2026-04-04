import { Component, inject } from '@angular/core';
import { Ecommerce } from '../../ecommerce';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  imports: [MatIconModule], 
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {
  private merce = inject(Ecommerce)
  private router = inject(Router);
  total: number = 0
  catalogo = this.merce.getCatalogo()

  navigateTo(){
    this.router.navigate(['/pagina3']);
  }

  aggiungiProdotto(prodotto: {nome: string, pezzi: number}){
    this.merce.aggiungi(prodotto)
  }
  rimuoviProdotto(prodotto: {nome: string, pezzi: number}){
    this.merce.rimuovi(prodotto)
  }  
}


