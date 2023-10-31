import type { IGeoCoordinateHelper } from '../../component/geo/interface';
import type { IPoint } from '../../typings';
import type { IGeoSeries } from '../interface';
import { SeriesTypeEnum } from '../interface/type';
import { BaseSeries } from '../base/base-series';
import type { SeriesData } from '../base/series-data';
import type { DataView } from '@visactor/vdataset';
import type { IGeoSeriesSpec } from './interface';
import type { IMark } from '../../mark/interface';
export declare abstract class GeoSeries<T extends IGeoSeriesSpec = IGeoSeriesSpec>
  extends BaseSeries<T>
  implements IGeoSeries
{
  type: SeriesTypeEnum;
  readonly coordinate = 'geo';
  protected _mapViewData: SeriesData;
  getMapViewData(): DataView;
  protected _mapViewDataStatistics: DataView;
  _nameField: string;
  get nameField(): string;
  set nameField(f: string);
  _valueField: string;
  get valueField(): string;
  set valueField(f: string);
  protected _nameProperty: string;
  getNameProperty(): string;
  protected _centroidProperty?: string;
  getCentroidProperty(): string;
  _coordinateHelper: IGeoCoordinateHelper;
  getCoordinateHelper(): IGeoCoordinateHelper;
  setCoordinateHelper(h: IGeoCoordinateHelper): void;
  getStatisticFields(): {
    key: string;
    operations: Array<'max' | 'min' | 'values'>;
  }[];
  getGroupFields(): string[];
  dataToPosition(datum: any): IPoint | null;
  protected nameToPosition(datum: any): IPoint | null;
  abstract getDatumCenter(datum: any): [number, number];
  abstract getDatumName(datum: any): string;
  dataToLatitude(latValue: number): number;
  dataToLongitude(lonValue: number): number;
  valueToPosition(lonValue: number, latValue: number): IPoint;
  positionToData(p: IPoint): void;
  latitudeToData(lat: number): void;
  longitudeToData(lon: number): void;
  dataToPositionX(data: any): number;
  dataToPositionY(data: any): number;
  dataToPositionZ(data: any): number;
  release(): void;
  getStackGroupFields(): string[];
  getStackValueField(): string;
  compileData(): void;
  protected initStatisticalData(): void;
  getSeriesKeys(): string[];
  fillData(): void;
  getActiveMarks(): IMark[];
}
