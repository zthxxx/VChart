import { PolarSeries } from '../polar/polar';
import type { ICorrelationSeriesSpec } from './interface';
import { SeriesTypeEnum } from '../interface/type';
import type { SeriesMarkMap } from '../interface';
import { SeriesData } from '../base/series-data';
import type { Maybe } from '../../typings';
import { ICorrelationSeriesTheme } from './interface';
import type { ILabelMark } from '../../mark/label';
import type { IMark } from '../../mark/interface';
export declare class CorrelationSeries extends PolarSeries<any> {
  static readonly type: string;
  type: SeriesTypeEnum;
  static readonly mark: SeriesMarkMap;
  protected _theme: Maybe<ICorrelationSeriesTheme>;
  protected _centerSeriesData: SeriesData;
  private _nodePointMark;
  private _ripplePointMark;
  private _centerPointMark;
  private _viewBox;
  protected _categoryField: string;
  getCategoryField(): string;
  setCategoryField(f: string): string;
  protected _valueField: string;
  getValueField(): string;
  setValueField(f: string): string;
  protected _seriesField?: string;
  getSeriesField(): string;
  setSeriesField(field: string): void;
  protected _sizeField?: ICorrelationSeriesSpec['sizeField'];
  getSizeField(): string;
  setSizeField(field: string): void;
  protected _sizeRange?: ICorrelationSeriesSpec['sizeRange'];
  getSizeRange(): number[];
  setSizeRange(range: number[]): void;
  protected _viewDataTransform: SeriesData;
  setAttrFromSpec(): void;
  protected initData(): void;
  protected _statisticViewData(): void;
  initMark(): void;
  initMarkStyle(): void;
  protected _initNodePointMarkStyle(): void;
  protected _initRipplePointMarkStyle(): void;
  protected _initCenterPointMarkStyle(): void;
  protected initTooltip(): void;
  initLabelMarkStyle(labelMark?: ILabelMark): void;
  initAnimation(): void;
  getGroupFields(): string[];
  getStackGroupFields(): string[];
  getStackValueField(): string;
  getActiveMarks(): IMark[];
  getDimensionField(): string[];
  getMeasureField(): string[];
  onLayoutEnd(ctx: any): void;
}
export declare const registerCorrelationSeries: () => void;
