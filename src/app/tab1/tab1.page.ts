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
  isCardVisible: boolean = false;

  constructor(private alertController: AlertController) {}

  async calcularEmprestimo() {
    const V = this.valor;
    const i = this.taxa; // taxa mensal
    const n = this.meses;

    if (V <= 0 || this.taxa <= 0 || n <= 0) {
      this.isCardVisible = false;
      await this.showAlert('Erro', 'Por favor, preencha todos os campos com valores válidos.');
      return;
    }

    if (this.taxa > 20) {
      await this.showAlert('Atenção', 'Taxa de juros acima de 20% ao ano. Este empréstimo pode ser arriscado!');
    } else {
      await this.showAlert('Aviso', 'Considere avaliar com cuidado as condições do empréstimo.');
    }

    const parcela = (V * (i/100))/(1-(1+(i/100)**-n));
    this.resultado = parcela;
    this.isCardVisible = true;
  }

  async showAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

