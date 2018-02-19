import { Component, OnInit, Input } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styles: []
})
export class GraficaDonutComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 400, 100];
  public doughnutChartType: string = 'doughnut';
  public leyenda: string = 'Leyenda';

  @Input() datos: any;

  constructor() { }

  ngOnInit() {
    this.crearGrafica(this.datos);
  }

  crearGrafica(datos) {
      console.log(datos);

      this.doughnutChartLabels = datos.labels;
      this.doughnutChartData = datos.data;
      this.doughnutChartType = datos.type;
      this.leyenda = datos.leyenda;

    }
  }
}
