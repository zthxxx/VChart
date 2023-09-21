import type { IAreaChartSpec } from '../../chart/area';
import type { IBarChartSpec, IBar3dChartSpec } from '../../chart/bar';
import type { IBoxPlotChartSpec } from '../../chart/box-plot';
import type { ICirclePackingChartSpec } from '../../chart/circle-packing';
import type { ICommonChartSpec } from '../../chart/common';
import type { IFunnelChartSpec, IFunnel3dChartSpec } from '../../chart/funnel';
import type { IGaugeChartSpec } from '../../chart/gauge';
import type { IHeatmapChartSpec } from '../../chart/heatmap';
import type { IHistogramChartSpec, IHistogram3dChartSpec } from '../../chart/histogram';
import type { ILineChartSpec } from '../../chart/line';
import type { IMapChartSpec } from '../../chart/map';
import type { IPieChartSpec, IPie3dChartSpec } from '../../chart/pie';
import type { ICircularProgressChartSpec } from '../../chart/progress/circular';
import type { ILinearProgressChartSpec } from '../../chart/progress/linear';
import type { IRadarChartSpec } from '../../chart/radar';
import type { IRangeAreaChartSpec } from '../../chart/range-area';
import type { IRangeColumnChartSpec, IRangeColumn3dChartSpec } from '../../chart/range-column';
import type { IRoseChartSpec } from '../../chart/rose';
import type { ISankeyChartSpec } from '../../chart/sankey';
import type { IScatterChartSpec } from '../../chart/scatter';
import type { ISequenceChartSpec } from '../../chart/sequence';
import type { ISunburstChartSpec } from '../../chart/sunburst';
import type { ITreemapChartSpec } from '../../chart/treemap';
import type { IWaterfallChartSpec } from '../../chart/waterfall';
import type { ICorrelationChartSpec } from '../../chart/correlation';
import type { IWordCloudChartSpec, IWordCloud3dChartSpec } from '../../chart/word-cloud';

export interface ChartSpecMap {
  readonly common: ICommonChartSpec;
  readonly area: IAreaChartSpec;
  readonly line: ILineChartSpec;
  readonly bar: IBarChartSpec;
  readonly bar3d: IBar3dChartSpec;
  readonly histogram: IHistogramChartSpec;
  readonly histogram3d: IHistogram3dChartSpec;
  readonly rangeColumn: IRangeColumnChartSpec;
  readonly rangeColumn3d: IRangeColumn3dChartSpec;
  readonly rangeArea: IRangeAreaChartSpec;
  readonly map: IMapChartSpec;
  readonly pie: IPieChartSpec;
  readonly pie3d: IPie3dChartSpec;
  readonly radar: IRadarChartSpec;
  readonly rose: IRoseChartSpec;
  readonly scatter: IScatterChartSpec;
  readonly sequence: ISequenceChartSpec;
  readonly circleProgress: ICircularProgressChartSpec;
  readonly linearProgress: ILinearProgressChartSpec;
  readonly wordCloud: IWordCloudChartSpec;
  readonly wordCloud3d: IWordCloud3dChartSpec;
  readonly funnel: IFunnelChartSpec;
  readonly funnel3d: IFunnel3dChartSpec;
  readonly waterfall: IWaterfallChartSpec;
  readonly boxplot: IBoxPlotChartSpec;
  readonly gauge: IGaugeChartSpec;
  readonly sankey: ISankeyChartSpec;
  readonly treemap: ITreemapChartSpec;
  readonly sunburst: ISunburstChartSpec;
  readonly circlePacking: ICirclePackingChartSpec;
  readonly heatmap: IHeatmapChartSpec;
  readonly correlation: ICorrelationChartSpec;
}

export type ISpec = ChartSpecMap[keyof ChartSpecMap];
