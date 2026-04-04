import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Ecommerce } from '../../ecommerce';
import { Router } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-pagina3',
  imports: [MatIcon],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
  private spesa = inject(Ecommerce)
  private router = inject(Router);

  carrello = this.spesa.getSpesa()

  navigateTo(){
    this.router.navigate(['/pagina1']);
  }

}
