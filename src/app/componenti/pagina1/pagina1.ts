import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { Ecommerce } from '../../ecommerce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  imports: [MatInputModule, FormsModule, MatIconModule],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.css',
})
export class Pagina1 {
  private merce = inject(Ecommerce)
  private router = inject(Router);
  catalogo = this.merce.getCatalogo()
  bool: boolean = false
  prodotto: {nome: string; pezzo: number} = {nome: "", pezzo: 0}
  i: number = 0

  onInput(e: Event) { 
    this.prodotto.nome = (e.target as HTMLInputElement).value; 
    console.log(this.prodotto)
  }

  navigateTo(){
    this.router.navigate(['/pagina2']);
  }

  ricerca(e: Event){
    this.bool = true
    console.log("RICERCA", this.prodotto)
    return this.bool
  }

  ricercaCatalogo(){
    while(this.i < this.catalogo.length){ 
      if(this.prodotto.nome.toLocaleLowerCase() === this.catalogo[this.i].nome.toLocaleLowerCase()){ 
        console.log("TROVATO",this.catalogo[this.i].nome)
        this.i = 0
        return this.prodotto.nome
      } 
      this.i++
    }
    this.i = 0
    this.bool = false
    return "non trovato"
  }

}
