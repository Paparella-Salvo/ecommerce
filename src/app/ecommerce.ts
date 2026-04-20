import { inject, Injectable } from '@angular/core';
import { Prodotto } from './prodotto';
import { Admin } from './componenti/admin/admin';

@Injectable({
  providedIn: 'root',
})
export class Ecommerce {
  catalogo: Prodotto[] = []
  private spesa: Prodotto[] = []

  getCatalogo(): {nome: string; pezzi: number}[]{
    return this.catalogo
  }

  aggiungiProdotto(prodotto: {nome: string, pezzi: number}){
     const esiste = this.catalogo.find(n => n.nome === prodotto.nome)

    if(!esiste){
      this.catalogo.push({ nome: prodotto.nome, pezzi:  prodotto.pezzi})
      console.log("CATALOGO: ", this.catalogo);
      return this.catalogo
    } else {
      console.log("CATALOGO: ", this.catalogo);
      esiste.pezzi = Number(esiste.pezzi) + Number(prodotto.pezzi) 
      return "prodotto già presente"
    }
  }

  getSpesa(): {nome: string; pezzi: number}[] {
    return this.spesa
  }

  aggiungi(prodotto: {nome: string, pezzi: number}){
    const esisteSpesa = this.spesa.find(n => n.nome === prodotto.nome)
    const esisteCatalogo = this.catalogo.find(n => n.nome === prodotto.nome)

    if(esisteCatalogo){
      if(esisteCatalogo.pezzi >= 1){
        if(esisteSpesa){
          esisteSpesa.pezzi += 1
          esisteCatalogo.pezzi -=1
        } else {
          this.spesa.push({ nome: prodotto.nome, pezzi: 1 })
          esisteCatalogo.pezzi -=1
        } 
      } 
    }
    console.log("AGGIORNAMENTO CATALOGO", this.catalogo)
    console.log("SPESA: ", this.spesa);
  }

  rimuovi(prodotto: {nome: string, pezzi: number}){
    const esisteSpesa = this.spesa.find(n => n.nome === prodotto.nome)
    const index = this.spesa.findIndex(s => s.nome === prodotto.nome);
    const esisteCatalogo = this.catalogo.find(n => n.nome === prodotto.nome)

    if(esisteCatalogo){
      if(esisteSpesa){
        if(esisteSpesa.pezzi == 1){
          this.spesa.splice(index, 1);
          esisteCatalogo.pezzi += 1
        } else {
          esisteSpesa.pezzi -= 1
          esisteCatalogo.pezzi +=1 
        }
      }
    }
    console.log("AGGIORNAMENTO CATALOGO", this.catalogo)
    console.log("SPESA: ", this.spesa)
  }
}
