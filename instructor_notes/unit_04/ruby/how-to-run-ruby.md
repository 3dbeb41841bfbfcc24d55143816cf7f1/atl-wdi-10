[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Running your Ruby scripts

You'll interact with your .rb files in a very similar way to your .js files.

You'll use the $`ruby` command and the repl `pry` instead of using $`node` like you did for Javascript.

### REALLY IMPORTANT

Ruby *DOES NOT* run in the browser. It is *purely* server side. You will only be able to load it into the terminal.

Remember that Javascript runs server side as well as in the brower.


## Running ruby files

1. touch a file `test.rb`

2. add a line `puts "Hello from test.rb"`

3. run the file using ruby from the terminal $`ruby test.rb`

## Running ruby in the REPL

1. Start pry, $`pry`.  If you get an error stating 'pry: command not found', run this command.

```bash
  gem install pry
```

2. You can now run any ruby code, similar to when we type JavaScript into `node`


## Loading files into pry

You can also load ruby files into the `pry` repl using the `load`

1. add a method to `test.rb`

  ```ruby
  def hello
    puts "hello from test.rb hello method"
  end
  ```

2. Start pry $`pry` in the same directory as your ruby file

3. In `pry` run `load 'test.rb'` it should return `true`. If it doesn't you likely did not specify the path correctly.

4. You should now have access to all the code in test.rb.

  - try invoking the `hello` method

5. Add a new method to test.rb

6. Run `load 'test.rb'` again and invoke the new function!
