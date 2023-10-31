import type {
  ColorScheme,
  ColorSchemeItem,
  IColorKey,
  IColorSchemeStruct,
  IThemeColorScheme,
  ProgressiveDataScheme
} from './interface';
import type { ISeriesSpec } from '../../typings';
export declare function getDataScheme(
  colorScheme?: IThemeColorScheme,
  seriesSpec?: ISeriesSpec
): Array<ColorSchemeItem> | ProgressiveDataScheme<ColorSchemeItem>;
export declare function computeActualDataScheme(
  dataScheme: Array<ColorSchemeItem> | ProgressiveDataScheme<ColorSchemeItem>,
  colorDomain: any[]
): Array<ColorSchemeItem>;
export declare function queryColorFromColorScheme(
  colorScheme: IThemeColorScheme,
  colorKey: IColorKey,
  seriesSpec?: ISeriesSpec
): ColorSchemeItem | undefined;
export declare const getActualColor: (value: any, colorScheme?: IThemeColorScheme, seriesSpec?: ISeriesSpec) => any;
export declare function isColorKey(obj: any): obj is IColorKey;
export declare function isProgressiveDataColorScheme<T>(obj: any): obj is ProgressiveDataScheme<T>;
export declare function transformColorSchemeToStandardStruct(colorScheme: ColorScheme): IColorSchemeStruct;
export declare function getColorSchemeBySeries(
  colorScheme?: IThemeColorScheme,
  seriesSpec?: ISeriesSpec
): ColorScheme | undefined;
