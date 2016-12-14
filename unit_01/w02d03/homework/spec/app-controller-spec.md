# Unit Spec : `AppController`

## `handleClockTick`

```markdown
1.  It retrieves the current time values (mins, secs, millisecs) from `Stopwatch`.
2.  It calls `updateTimeDisplay` on `ViewEngine`.
```

## `handleClickStart`

```markdown
1.  If the stopwatch is not running,
  a.  it starts the stopwatch.
2.  If the stopwatch is already running,
  b.  it does nothing.
```

## `handleClickLap`

```markdown
1.  If the stopwatch is running,
  a.  it records a lap.
  b.  it updates the display of laps.
2.  If the stopwatch is not running,
  a.  it does nothing.
```

## `handleClickStopReset`

```markdown
1.  If the stopwatch is running,
  a. it stops the stopwatch.
2.  If the stopwatch is not running,
  a. it resets the stopwatch.
  b. it updates the time display so that it shows `00:00:00`.
  c. it updates the lap list display so that it is empty.
```
