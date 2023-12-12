import { array, isValid, isNil, isArray } from '@visactor/vutils';
import type { IIndicatorSpec } from '../../component/indicator/interface';
import { BaseChart, BaseChartSpecTransformer } from '../base-chart';
import type { IDataZoomSpec } from '../../component/data-zoom';
import { IFilterMode } from '../../component/data-zoom/constant';
import type { IPolarChartSpec } from './interface';
import type { ISeriesSpec } from '../..';

export class PolarChartSpecTransformer<T extends IPolarChartSpec> extends BaseChartSpecTransformer<T> {
  protected _isValidSeries(type: string): boolean {
    return this.seriesType ? type === this.seriesType : true;
  }

  protected getIndicatorSpec(spec: any): IIndicatorSpec[] {
    const indicatorSpec = array(spec.indicator) as IIndicatorSpec[];
    const limitRatio = spec.innerRadius ?? spec.series?.[0]?.innerRadius;
    if (isValid(limitRatio)) {
      indicatorSpec.forEach(indicator => {
        if (isNil(indicator.limitRatio)) {
          indicator.limitRatio = limitRatio;
        }
      });
    }
    return indicatorSpec;
  }

  protected _getDefaultSeriesSpec(spec: any): any {
    const series: any = {
      ...super._getDefaultSeriesSpec(spec),

      /**
       * 旧的radius写法, 仅做兼容
       * @deprecated use outerRadius instead
       */
      radius: spec.radius,
      outerRadius: spec.outerRadius,
      innerRadius: spec.innerRadius,

      startAngle: spec.startAngle,
      endAngle: spec.endAngle,
      sortDataByAxis: spec.sortDataByAxis
    };
    const seriesType = this.seriesType;
    if (seriesType) {
      series.type = seriesType;
      series[seriesType] = spec[seriesType];
    }

    return series;
  }

  transformSpec(spec: T): void {
    super.transformSpec(spec);
    /** 处理极坐标系下的 datazoom */
    if (isArray(spec.dataZoom) && spec.dataZoom.length > 0) {
      spec.dataZoom.forEach((zoom: IDataZoomSpec) => {
        // 极坐标系下 datazoom 目前只支持数据过滤
        // 理想效果：角度轴不支持 axis， 径向轴均支持（通过 group.clip 自定义 clipPath 支持）
        if (zoom.filterMode === IFilterMode.axis) {
          zoom.filterMode = IFilterMode.filter;
        }
      });
    }
    /* 处理 series 配置 */
    const defaultSeriesSpec = this._getDefaultSeriesSpec(spec);
    if (!spec.series || spec.series.length === 0) {
      spec.series = [defaultSeriesSpec];
    } else {
      spec.series.forEach((s: ISeriesSpec) => {
        if (!this._isValidSeries(s.type)) {
          return;
        }
        Object.keys(defaultSeriesSpec).forEach(k => {
          if (!(k in s)) {
            s[k] = defaultSeriesSpec[k];
          }
        });
      });
    }

    /* 处理 indicator 配置 */
    if (isValid((spec as any).indicator)) {
      (spec as any).indicator = this.getIndicatorSpec(spec);
    }
  }
}

export class PolarChart<T extends IPolarChartSpec> extends BaseChart<T> {
  static readonly transformerConstructor = PolarChartSpecTransformer;
  readonly transformerConstructor = PolarChartSpecTransformer;
}
