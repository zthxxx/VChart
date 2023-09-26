import { registerBar3dSeries } from '../../series/bar/bar-3d';
import { SeriesTypeEnum } from '../../series/interface';
import { ChartTypeEnum } from '../interface';
import { BaseHistogramChart } from './base';
import { Factory } from '../../core';

export class Histogram3dChart extends BaseHistogramChart {
  static readonly type: string = ChartTypeEnum.histogram3d;
  static readonly view: string = 'singleDefault';
  readonly type: string = ChartTypeEnum.histogram3d;
  readonly seriesType: string = SeriesTypeEnum.bar3d;
}
export const registerHistogram3dChart = () => {
  registerBar3dSeries();
  Factory.registerChart(Histogram3dChart.type, Histogram3dChart);
};
