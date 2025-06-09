import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  valor: number = 0;
  taxa: number = 0;
  meses: number = 0;
  resultado: number = 0;
  CardResult: boolean = false;

  constructor(private Alerta: AlertController) {}

  async calcularEmprestimo() {


    if (this.valor<= 0 || this.taxa <= 0 || this.meses <= 0) {
      this.CardResult = false;
      await this.Alert('Erro', 'Por favor, preencha todos os campos com valores válidos.');
      return;
    }

    if (this.taxa > 20) {
      await this.Alert('Atenção', 'Taxa de juros acima de 20% ao ano. Este empréstimo pode ser arriscado!');
    } else {
      await this.Alert('Aviso', 'Taxa de juros abaixo de 20% ao ano. Considere avaliar com cuidado o empréstimo.');
    }

    const parcela = (this.valor * (this.taxa / 100 / 12)) / (1 - (1 + (this.taxa / 100 / 12)) ** -this.meses)
    this.resultado = parcela;
    this.CardResult = true;
  }

  async Alert(titulo: string, mensagem: string) {
    const alert = await this.Alerta.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

