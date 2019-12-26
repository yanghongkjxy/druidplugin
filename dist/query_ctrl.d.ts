/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
import './css/query_editor.css!';
export declare class DruidQueryCtrl extends QueryCtrl {
    static templateUrl: string;
    errors: any;
    addFilterMode: boolean;
    addAggregatorMode: boolean;
    addPostAggregatorMode: boolean;
    addDimensionsMode: boolean;
    addMetricsMode: boolean;
    listDataSources: any;
    getDimensionsAndMetrics: any;
    getMetrics: any;
    getMetricsPlusDimensions: any;
    getDimensions: any;
    getFilterValues: any;
    queryTypes: any;
    filterTypes: any;
    aggregatorTypes: any;
    postAggregatorTypes: any;
    arithmeticPostAggregator: any;
    customGranularity: any;
    target: any;
    datasource: any;
    queryTypeValidators: {
        "timeseries": any;
        "groupBy": any;
        "topN": any;
        "select": any;
    };
    filterValidators: {
        "selector": any;
        "regex": any;
        "javascript": any;
    };
    aggregatorValidators: {
        "count": (target: any) => string;
        "cardinality": any;
        "longSum": any;
        "doubleSum": any;
        "approxHistogramFold": any;
        "hyperUnique": any;
        "thetaSketch": any;
    };
    postAggregatorValidators: {
        "arithmetic": any;
        "max": any;
        "min": any;
        "quantile": any;
    };
    arithmeticPostAggregatorFns: {
        '+': any;
        '-': any;
        '*': any;
        '/': any;
    };
    defaultQueryType: string;
    defaultFilterType: string;
    defaultAggregatorType: string;
    defaultPostAggregator: {
        type: string;
        'fn': string;
    };
    customGranularities: string[];
    defaultCustomGranularity: string;
    defaultSelectDimension: string;
    defaultSelectMetric: string;
    defaultLimit: number;
    constructor($scope: any, $injector: any, $q: any);
    cachedAndCoalesced(ioFn: any, $scope: any, cacheName: any): any;
    targetBlur(): void;
    addFilter(): void;
    editFilter(index: any): void;
    removeFilter(index: any): void;
    clearCurrentFilter(): void;
    addSelectDimensions(): void;
    removeSelectDimension(index: any): void;
    clearCurrentSelectDimension(): void;
    addSelectMetrics(): void;
    removeSelectMetric(index: any): void;
    clearCurrentSelectMetric(): void;
    addAggregator(): void;
    editAggregator(index: any): void;
    removeAggregator(index: any): void;
    clearCurrentAggregator(): void;
    addPostAggregator(): void;
    removePostAggregator(index: any): void;
    clearCurrentPostAggregator(): void;
    isValidFilterType(type: any): any;
    isValidAggregatorType(type: any): any;
    isValidPostAggregatorType(type: any): any;
    isValidQueryType(type: any): any;
    isValidArithmeticPostAggregatorFn(fn: any): any;
    validateMaxDataPoints(target: any, errs: any): boolean;
    validateLimit(target: any, errs: any): boolean;
    validateOrderBy(target: any): boolean;
    validateGroupByQuery(target: any, errs: any): boolean;
    validateTopNQuery(target: any, errs: any): boolean;
    validateSelectQuery(target: any, errs: any): boolean;
    validateSelectorFilter(target: any): "Must provide dimension name for selector filter." | "Must provide dimension value for selector filter.";
    validateJavascriptFilter(target: any): "Must provide dimension name for javascript filter." | "Must provide func value for javascript filter.";
    validateRegexFilter(target: any): "Must provide dimension name for regex filter." | "Must provide pattern for regex filter.";
    validateCountAggregator(target: any): string;
    validateCardinalityAggregator(type: any, target: any): string;
    validateSimpleAggregator(type: any, target: any): string;
    validateApproxHistogramFoldAggregator(target: any): string;
    validateThetaSketchAggregator(target: any): string;
    validateSimplePostAggregator(type: any, target: any): string;
    validateMaxPostAggregator(target: any): string;
    validateMinPostAggregator(target: any): string;
    validateQuantilePostAggregator(target: any): string;
    validateArithmeticPostAggregator(target: any): "Must provide an output name for arithmetic post aggregator." | "Must provide a function for arithmetic post aggregator." | "Invalid arithmetic function" | "Must provide a list of fields for arithmetic post aggregator." | "Must provide at least two fields for arithmetic post aggregator.";
    validateTarget(): any;
}
