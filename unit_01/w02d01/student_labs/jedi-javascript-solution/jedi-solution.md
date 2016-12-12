###Javascript Jedi Solution

Practice the things you learned today by modifying the Jedi Academy document in the console! Please do the following:

- Make the Luke and Obiwan lightsabers appear in the browser

```javascript 
document.getElementById('luke').style.display= "block";
```

- Change the text on the first 'p' tag

```javascript 
document.getElementById("container").childNodes[3].innerHTML = “Changing text";
```

- Change the color of the 'h1' 

```javascript 
document.getElementById("container").childNodes[1].style.color = "red";
```

- Change the length and/or color of a lightsaber (for Darth's saber):

```javascript 
document.getElementsByClassName("blade")[0].style.width = "100px";
```

or 

```javascript
document.getElementsByClassName("blade")[0].setAttribute("id", "darth");

document.getElementById("darth").style.width = "700px";
```

- Change the font of a `p` tag

```javascript 
document.getElementsByTagName("p")[0].style.fontFamily = "Impact,Charcoal,sans-serif";
```

- Make Vader's handle blue.

```javascript 
document.getElementById('vader').childNodes[1].style.backgroundColor = "blue"
```

#####Note that you must get specific in most cases by calling an ID or getting a single instance of a class using an index.