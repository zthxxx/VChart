import type { DataView } from '@visactor/vdataset';
import type { IGrammarItem } from '../../compile/interface';
import type { IGroupMark } from '../../mark/group';
import type { IModelConstructor, IModelMarkInfo, IModelOption, IModelSpecInfo } from '../../model/interface';
import type { IRegion } from '../../region/interface';
import type { RenderMode } from '../../typings/spec/common';
import type { ISeries } from './series';
import type { IMarkProgressiveConfig } from '../../mark/interface';
import type { ISeriesSpec, StringOrNumber } from '../../typings';
import type { TransformedLabelSpec } from '../../component/label';
import type { SeriesMarkNameEnum, SeriesTypeEnum } from './type';
import type { ICustomPath2D } from '@visactor/vrender-core';
export interface ISeriesSeriesInfo {
    key: string;
    index?: number;
    style: (attribute: string) => any;
    shapeType: string;
}
export interface ISeriesOption extends IModelOption {
    mode: RenderMode;
    region: IRegion;
    sourceDataList: DataView[];
    getSeriesData: (id: StringOrNumber | undefined, index: number | undefined) => DataView | undefined;
}
export interface ISeriesConstructor extends IModelConstructor {
    readonly type: string;
    mark?: SeriesMarkMap;
    new (spec: any, options: ISeriesOption): ISeries;
}
export interface ISeriesInitOption {
}
export interface ISeriesUpdateDataOption {
}
export interface ISeriesStackDataNode {
    nodes: {
        [key: string]: ISeriesStackDataMeta;
    };
}
export interface ISeriesStackDataLeaf {
    values: any[];
    total?: number;
}
export type ISeriesStackDataMeta = ISeriesStackDataNode | ISeriesStackDataLeaf;
export type ISeriesStackData = ISeriesStackDataNode;
export type ISeriesStyle = ISeriesStyleItem[];
export type ISeriesStyleItem = {
    name: string;
} & {
    [markName: string]: {
        style?: any;
    };
};
export interface ISeriesMarkInitOption {
    themeSpec?: any;
    markSpec?: any;
    skipBeforeLayouted?: boolean;
    parent?: IGroupMark | false;
    isSeriesMark?: boolean;
    depend?: IGrammarItem | IGrammarItem[];
    key?: string;
    groupKey?: string;
    morph?: boolean;
    defaultMorphElementKey?: string;
    dataView?: DataView | false;
    dataProductId?: string;
    seriesId?: number;
    progressive?: IMarkProgressiveConfig;
    support3d?: boolean;
    customShape?: (datum: any[], attrs: any, path: ICustomPath2D) => ICustomPath2D;
}
export interface ISeriesMarkInfo extends IModelMarkInfo {
    name: SeriesMarkNameEnum | string;
}
export type SeriesMarkMap = Partial<Record<SeriesMarkNameEnum, ISeriesMarkInfo>>;
export interface ISeriesSpecInfo<T extends ISeriesSpec = ISeriesSpec> extends IModelSpecInfo {
    type: string | SeriesTypeEnum;
    spec: T;
    markLabelSpec?: Partial<Record<SeriesMarkNameEnum, TransformedLabelSpec[]>>;
    totalLabel?: IModelSpecInfo;
}
