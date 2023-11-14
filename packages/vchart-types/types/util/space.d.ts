import { type IBoundsLike } from '@visactor/vutils';
import type { ILayoutPaddingSpec, IPercentOffset, ILayoutNumber, IPercent, ILayoutOrientPadding, ILayoutRect } from '../model/interface';
import type { IPadding, IRect } from '../typings/space';
import type { IPoint } from '../typings/coordinate';
export declare function isValidOrient(orient: string): boolean;
export declare function isPointInRect(point: IPoint, rect: IRect): boolean;
export declare function isPercent(v: any): v is IPercent;
export declare function isPercentOffset(v: any): v is IPercentOffset;
export declare function calcLayoutNumber(v: ILayoutNumber | undefined, size: number, callOp?: ILayoutRect): number;
export declare function calcPadding(paddingSpec: ILayoutOrientPadding, rect: ILayoutRect, callOp: ILayoutRect): IPadding;
export declare function boundsInRect(bounds: IBoundsLike, rect: ILayoutRect): ILayoutRect;
export declare function normalizeLayoutPaddingSpec(spec: ILayoutPaddingSpec): ILayoutOrientPadding;
export declare function convertPoint(point: IPoint, relativePoint: IPoint, convert: boolean): IPoint;
export declare const getActualNumValue: (originValue: number | string, total: number) => number;
