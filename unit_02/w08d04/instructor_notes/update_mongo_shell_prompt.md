Touch the following file:

$`touch ~/.mongorc.js`

Copy this function into `.mongorc.js`

```
prompt = function() {
    if (typeof db == 'undefined') return '(nodb)> ';

      try { db.runCommand({getLastError: 1}); }
        catch (e) { print(e); }
          return '[DB]' + db + ' > ';
};
```

Save, quit, and restart the terminal
