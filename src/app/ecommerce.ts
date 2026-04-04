import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ecommerce {
  catalogo: {nome: string; pezzi: number}[] = [
    {nome: 'penna', pezzi: 0},
    {nome: 'matita', pezzi: 0},
    {nome: 'gomma', pezzi: 0}
  ]
  totale: number = 0
  private spesa:{nome: string; pezzi: number}[] = []

  getCatalogo(): {nome: string; pezzi: number}[]{
    return this.catalogo
  }

  getSpesa(): {nome: string; pezzi: number}[] {
    return this.spesa
  }

  aggiungi(prodotto: {nome: string, pezzi: number}){
    const esiste = this.spesa.find(n => n.nome === prodotto.nome)

    if(esiste){
      esiste.pezzi += 1
    } else {
      this.spesa.push({ nome: prodotto.nome, pezzi: 1 })
    }
    console.log("SPESA: ", this.spesa);
  }

  rimuovi(prodotto: {nome: string, pezzi: number}){
    const esiste = this.spesa.find(n => n.nome === prodotto.nome)
    const index = this.spesa.findIndex(s => s.nome === prodotto.nome);

    if(esiste?.pezzi == 1){
      this.spesa.splice(index, 1);
    }
    if(esiste){
      esiste.pezzi -= 1
    }
    
    console.log("SPESA: ", this.spesa)
  }
}