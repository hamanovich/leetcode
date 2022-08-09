// https://leetcode.com/problems/insert-interval/

import { merge } from '../56-merge-intervals/56-merge-intervals';

export const insert = (intervals: number[][], newInterval: number[]): number[][] => merge([...intervals, newInterval]);
