# Positioning

- Make the text after el flow around it on the right-hand side

```
.el{
  float:left;
}
```

- Make the text after el flow around it on the left-hand side

```
.el{
  float:right;
}
```

- Make el centered horizontally

```
.el{
  margin-left:auto;
  margin-right:auto;
}
```

- Make el's text centered horizontally

```
.el{
  text-align:center;
}
```

- Place el 10 pixels relative the top and 20 pixels relative the left of its container

```
.el{
  position:absolute;
  top:10px;
  left:20px;
}
```

- Place el 10 pixels relative the top and 20 pixels relative the left of the browser window

```
.el{
  position:fixed;
  top:10px;
  left:20px;
}
```

- Place el 10 pixels relative the top and 20 pixels relative the left of where it would otherwise be

```
.el{
  position:relative;
  top:10px;
  left:20px;
}
```
