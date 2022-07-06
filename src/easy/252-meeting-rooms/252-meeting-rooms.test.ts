import { canAttendMeetings, Interval } from './252-meeting-rooms';

describe('canAttendMeetings', () => {
  test('intervals = [(0,30),(5,10),(15,20)]', () => {
    const intervals = [
      [0, 30],
      [5, 10],
      [15, 20],
    ].map(([start, end]) => new Interval(start, end));

    expect(canAttendMeetings(intervals)).toBeFalsy();
  });

  test('intervals = [(5,8),(9,15)]', () => {
    const intervals = [
      [5, 8],
      [9, 15],
    ].map(([start, end]) => new Interval(start, end));

    expect(canAttendMeetings(intervals)).toBeTruthy();
  });
});
