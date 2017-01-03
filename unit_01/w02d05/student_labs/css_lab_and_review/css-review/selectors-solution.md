# Selectors

- Every paragraph

```
p{
  outline:1px solid red;
}
```

- Every element with the class of "el"

```
.el{
  outline:1px solid red;
}
```

- Every paragraph with the class of "el"

```
p.el{
  outline:1px solid red;
}
```

- Every element with the class of "el" that's inside a paragraph

```
p .el{
  outline:1px solid red;
}
```

- Every element with the class of "el", and every paragraph

```
.el, p{
  outline:1px solid red;
}
```

- Every paragraph that's inside an element with the class of "el"

```
.el p{
  outline:1px solid red;
}
```

- Only paragraphs that are direct children of an element with the class of "el"

```
.el > p{
  outline:1px solid red;
}
```

- Every label that comes immediately after a radio button

```
input[type=radio]+label{
  outline:1px solid red;
}
```

- Every label that comes somewhere after a radio button, and shares a parent with it

```
input[type=radio]~label{
  outline:1px solid red;
}
```

- Every label that comes immediately after a radio button that is selected

```
input[type=radio]:checked+label{
  outline:1px solid red;
}
```

- Every link that currently has the mouse over it

```
a:hover{
  outline:1px solid red;
}
```

- Every link that is currently being clicked on

```
a:active{
  outline:1px solid red;
}
```

- Inserts text before a link

```
a:before{
  content:"link: ";
  outline:1px solid red;
}
```

- Inserts text after a link that is currently being clicked on

```
a:active:after{
  content:"!";
  outline:1px solid red;
}
```

- Every odd-numbered paragraph in a section

```
section p:nth-of-type(2n+1){
  outline:1px solid red;
}
```

- Every even-numbered paragraph in a section

```
section p:nth-of-type(2n){
  outline:1px solid red;
}
```
