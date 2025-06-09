import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  moradia = 0;
  alimentacao = 0;
  transporte = 0;
  lazer = 0;
  renda = 0;
  totalDespesas = 0;
  CardResult = false;
  moradiar= '';
  alimentacaor= '';
  transporter= '';
  lazerr= '';
  moradiaExcesso = 0;
  alimentacaoExcesso = 0;
  transporteExcesso = 0;
  lazerExcesso = 0;



  constructor(private alerta: AlertController) {}

  async SomarDespesas() {
    this.totalDespesas = this.moradia + this.alimentacao + this.transporte + this.lazer;
    this.CardResult = true;

    if (this.totalDespesas > this.renda) {
      await this.showAlert(
        'Atenção!',
        'Suas despesas estão acima da sua renda mensal.'
      );
    } else {
      await this.showAlert(
        'Tudo certo!',
        'Suas despesas estão dentro da sua renda.'
      );
    }


if (this.moradia > this.renda * 0.45) {
  this.moradiar = 'Precisa reduzir';
  this.moradiaExcesso = this.moradia - this.renda * 0.45;
} else {
  this.moradiar = 'Não precisa reduzir';
  this.moradiaExcesso = 0;
}

if (this.alimentacao > this.renda * 0.3) {
  this.alimentacaor = 'Precisa reduzir';
  this.alimentacaoExcesso = this.alimentacao - this.renda * 0.3;
} else {
  this.alimentacaor = 'Não precisa reduzir';
  this.alimentacaoExcesso = 0;
}

if (this.transporte > this.renda * 0.15) {
  this.transporter = 'Precisa reduzir';
  this.transporteExcesso = this.transporte - this.renda * 0.15;
} else {
  this.transporter = 'Não precisa reduzir';
  this.transporteExcesso = 0;
}

if (this.lazer > this.renda * 0.1) {
  this.lazerr = 'Precisa reduzir';
  this.lazerExcesso = this.lazer - this.renda * 0.1;
} else {
  this.lazerr = 'Não precisa reduzir';
  this.lazerExcesso = 0;
}

  }

  async showAlert(titulo: string, mensagem: string) {
    const alert = await this.alerta.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
