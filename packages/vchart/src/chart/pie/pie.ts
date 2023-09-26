import { registerPieSeries } from '../../series/pie/pie';
// eslint-disable-next-line no-duplicate-imports
import { SeriesTypeEnum } from '../../series/interface';
import { ChartTypeEnum } from '../interface';
import { BasePieChart } from './base';
import { Factory } from '../../core';

export class PieChart extends BasePieChart {
  static readonly type: string = ChartTypeEnum.pie;
  static readonly view: string = 'singleDefault';
  readonly type: string = ChartTypeEnum.pie;
  readonly seriesType: string = SeriesTypeEnum.pie;
}

export const registerPieChart = () => {
  registerPieSeries();
  Factory.registerChart(PieChart.type, PieChart);
};
