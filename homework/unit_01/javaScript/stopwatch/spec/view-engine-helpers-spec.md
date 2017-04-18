# Unit Spec : `ViewEngine`

## `updateTimeDisplay`

```markdown
1.  It displays the values of minutes, seconds, and (tens of)
    milliseconds elapsed in the DOM element with id `time-display`, in
    the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`), starting with
    `00:00:00`.
2.  It pads the values of minutes, seconds, and (tens of) milliseconds
    with zeros so that the strings are at least two characters long.
```

## `updateLapListDisplay`

```markdown
1.  It displays the recorded laps inside the `lap-list` element,
    representing each lap with an `<li>` element that displays the
    lap's `mins`, `secs`, and `millisecs` values (zero-padded to be at
    least two characters long, just like `time-display`).
```

# Unit Spec : `ViewHelpers`

## `zeroFill`

```markdown
1.  If `number` has fewer digits than `length`,
  a.  it should return a `number` as a string, padded on the left with
      zeros until its length is equal to `length`
2.  If `number` does not have fewer digits than `length`,
  a.  it should return `number` as a string, unaltered.
```
