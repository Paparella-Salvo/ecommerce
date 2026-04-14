import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { Ecommerce } from '../../ecommerce';
import { Router } from '@angular/router';
import { Pagina2 } from "../pagina2/pagina2";
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-pagina1',
  imports: [MatInputModule, FormsModule, MatIconModule, Pagina2, MatCheckboxModule],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.css',
})
export class Pagina1 {
  private merce = inject(Ecommerce)
  private router = inject(Router);
  catalogo = this.merce.getCatalogo()
  bool: boolean = false
  prodotto: {nome: string; pezzi: number} = {nome: "", pezzi: 0}
  i: number = 0

  trovato: boolean = false

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

  update(search: boolean) {
    if(search == true){
      this.merce.aggiungi(this.prodotto)
    }

    
  }

  ricercaCatalogo(){
    while(this.i < this.catalogo.length){ 
      if(this.prodotto.nome.toLocaleLowerCase() === this.catalogo[this.i].nome.toLocaleLowerCase()){ 
        console.log("TROVATO",this.catalogo[this.i].nome)
        //this.merce.aggiungi(this.prodotto)
        //console.log("METODO AGGIUNGI:", this.merce.aggiungi(this.prodotto))
        this.i = 0
        this.trovato = true
        return this.prodotto.nome //this.trovato && 
      } 
      this.i++
    }
    this.i = 0
    console.log("BOLLO", this.bool = false)
    this.bool = false
    this.trovato = false
    return "Prodotto NON trovato"
  }

}
