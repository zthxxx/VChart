import type { IRect, IPoint } from '../typings';
import type { IBoundsLike } from '@visactor/vutils';
import type { ILayoutItem, ILayoutItemSpec, ILayoutPoint, ILayoutRect, ILayoutRectLevel } from './interface';
import { CompilableBase } from '../compile/compilable-base';
export declare class LayoutItem<T extends ILayoutItemSpec = ILayoutItemSpec>
  extends CompilableBase
  implements ILayoutItem
{
  protected _spec: T;
  getSpec(): T;
  layoutClip: boolean;
  protected _autoIndent: boolean;
  getAutoIndent(): boolean;
  private _layoutStartPoint;
  getLayoutStartPoint(): ILayoutPoint;
  private _layoutRect;
  protected _minWidth: number | null;
  protected _maxWidth: number | null;
  protected _minHeight: number | null;
  protected _maxHeight: number | null;
  protected _layoutRectLevelMap: ILayoutRectLevel;
  protected _lastComputeRect: ILayoutRect;
  protected _lastComputeOutBounds: IBoundsLike;
  getLastComputeOutBounds(): IBoundsLike;
  protected _forceLayoutTag: boolean;
  getLayoutRect: () => ILayoutRect;
  layoutType: ILayoutItem['layoutType'];
  layoutBindRegionID: ILayoutItem['layoutBindRegionID'];
  _layoutOrient: ILayoutItem['layoutOrient'];
  get layoutOrient(): ILayoutItem['layoutOrient'];
  set layoutOrient(v: ILayoutItem['layoutOrient']);
  layoutPaddingLeft: ILayoutItem['layoutPaddingLeft'];
  layoutPaddingTop: ILayoutItem['layoutPaddingTop'];
  layoutPaddingRight: ILayoutItem['layoutPaddingRight'];
  layoutPaddingBottom: ILayoutItem['layoutPaddingBottom'];
  layoutOffsetX: ILayoutItem['layoutOffsetX'];
  layoutOffsetY: ILayoutItem['layoutOffsetY'];
  layoutLevel: ILayoutItem['layoutLevel'];
  layoutZIndex: ILayoutItem['layoutZIndex'];
  chartLayoutRect: ILayoutRect;
  getVisible(): boolean;
  private _setLayoutAttributeFromSpec;
  setAttrFromSpec(spec: ILayoutItemSpec, chartViewRect: ILayoutRect): void;
  onLayoutStart(layoutRect: IRect, viewRect: ILayoutRect, _ctx: any): void;
  private _getAbsoluteSpecValue;
  absoluteLayoutInRect(layoutRect: IRect): void;
  setLayoutStartPosition({ x, y }: Partial<IPoint>): void;
  setLayoutRect({ width, height }: Partial<ILayoutRect>, levelMap?: Partial<ILayoutRectLevel>): void;
  mergeLayoutRect({ width, height }: ILayoutRect): ILayoutRect;
  getOrientPosAttribute(): 'x' | 'y';
  getOrientSizeAttribute(): 'width' | 'height';
  protected changeBoundsBySetting(bounds: IBoundsLike): IBoundsLike;
  protected _setRectInSpec(rect: ILayoutRect): {
    width: number;
    height: number;
  };
  computeBoundsInRect(rect: ILayoutRect): ILayoutRect;
  protected _boundsInRect(rect: ILayoutRect, fullSpace: ILayoutRect): IBoundsLike;
  updateLayoutAttribute(): void;
  compile(): void;
  getGraphicBounds(): IBoundsLike;
}
