import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  valor: number = 0;
  taxa: number = 0;
  anos: number = 0;
  montante: number = 0;
  CardResult: boolean = false;

  constructor(private Alerta: AlertController) {}

  async calcularInvestimento() {


    if (this.valor<= 0 || this.taxa <= 0 || this.anos <= 0) {
      this.CardResult = false;
      await this.Alert('Erro', 'Por favor, preencha todos os campos com valores válidos.');
      return;
    }

    if (this.taxa > 20) {
      await this.Alert('Atenção', 'Taxa de juros acima de 15% ao ano. Este investimento pode ser arriscado!');
    } else {
      await this.Alert('Aviso', 'Taxa de juros abaixo de 15% ao ano. Esse investimento pode ser seguro.');
    }

    const final =  this.valor * (1 + (this.taxa/100) / 365) ** (this.anos * 365)
    this.montante = final;
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
