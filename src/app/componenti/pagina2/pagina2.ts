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
  spesa = this.merce.getSpesa()
  disable: boolean = false

  navigateTo(){
    this.router.navigate(['/pagina3']);
  }

  aggiungiProdotto(prodotto: {nome: string, pezzi: number}){
    this.merce.aggiungi(prodotto)
  }
  rimuoviProdotto(prodotto: {nome: string, pezzi: number}){
    this.merce.rimuovi(prodotto)
  }  
  
  DisabilitazioneAggiunta(prodotto: {nome: string, pezzi: number}){
    const esiste = this.catalogo.find(n => n.nome === prodotto.nome)
    if(esiste){
      if(esiste.pezzi == 0){
        this.disable = true
      } else {
        this.disable = false
      }
    }
    return this.disable
  }

  DisabilitazioneRimozione(prodotto: {nome: string, pezzi: number}){
    const esiste = this.spesa.find(n => n.nome === prodotto.nome)
    const index = this.spesa.findIndex(s => s.nome === prodotto.nome);
    if(esiste){
      this.disable = false
    } else {
      this.disable = true
    }
    return this.disable
  }
}
