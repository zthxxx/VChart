import type { IRect } from '../../typings/space';
import { BaseComponent } from '../base/base-component';
import type { IComponentOption } from '../interface';
import { ComponentTypeEnum } from '../interface/type';
import { LayoutZIndex } from '../../constant';
import type { IMapLabelSpec, MapLabelSceneNodeMap } from './interface';
import type { ICartesianSeries, IGeoSeries } from '../../series/interface';
import type { IPoint, Datum } from '../../typings';
import type { IPairInfo } from './layout';
import { MarkPoint } from '@visactor/vrender-components';
import type { IGraphic } from '@visactor/vrender-core';
import type { PanEventParam, ZoomEventParam } from '../../event/interface';
export declare class MapLabelComponent extends BaseComponent<IMapLabelSpec> {
    static type: ComponentTypeEnum;
    type: ComponentTypeEnum;
    name: string;
    layoutType: 'none';
    layoutZIndex: LayoutZIndex;
    protected nameField: string;
    protected valueField?: string;
    protected _series: ICartesianSeries | IGeoSeries;
    protected _map: any[];
    protected _longitudeField: string;
    protected _latitudeField: string;
    protected _markerComponents: MarkPoint[];
    private _activeDatum;
    static createComponent(spec: any, options: IComponentOption): MapLabelComponent;
    setAttrFromSpec(): void;
    created(): void;
    initRelatedInfo(): void;
    initData(): void;
    initEvent(): void;
    handlePan(e: PanEventParam): void;
    handleZoom(e: ZoomEventParam): void;
    private _updateDatum;
    dataToPosition(datum: any): IPoint;
    updateLayoutAttribute(): void;
    protected _updateMarkerLayoutAttribute(): void;
    protected _evaluateMarker(data: Datum, index: number): {
        pairInfo: IPairInfo;
        contentMarks: Partial<Record<import("./interface").IMapLabelNodes, IGraphic<Partial<import("@visactor/vrender-core").IGraphicAttribute>>>>;
    };
    protected _layoutMarkers(positionedRects: IRect[], contentMarks: MapLabelSceneNodeMap[]): void;
    protected _renderMarkers(): void;
    protected _layoutLabels(rects: IPairInfo[]): IRect[];
    private _isRelativeModel;
    private _isRelativeSeries;
    onRender(ctx: any): void;
    changeRegions(): void;
    protected _getNeedClearVRenderComponents(): IGraphic[];
}
export declare const registerMapLabel: () => void;
