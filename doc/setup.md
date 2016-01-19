##Sublime Build Setup
The following are the steps required to configure Sublime Text to automatically build and test the sample folder:

1.	In Sublime, goto Tools|Build System|New Build System….
	
	a.	You will be presented with a new tab.  Save the tab and give the name, “babel-node.sublime-build”

	b.	If you are using a Mac or Linux, you should be able to use the following:

	``` javascript
	{
		"cmd": ["babel-node", "$file"],
		"path": "/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"
	}
	```
	
	c.	If you are use Windows, you should be able to use the following:

	``` javascript
	{
		"shell_cmd": "babel-node $file",
		"path": "$PATH"
	}
	```

	d.	For either environments, you can use the command which node and which babel to get the paths.  I am using Git Bash to perform these commands on Windows.

	e.	Next, you need to let Sublime Text know which build system to use.  In Sublime Text, ensure that **babel-node** is checked from the menu Tools|Build System.  This will execute the the new build script we created and allow you to transpile and execute the examples.

2.	You should be ready to use Sublime to play with scripts.  Take note that Sublime will try and build based on whatever tab is active.  This may or may not be what you want if you are dealing with configuration files.

3.	You can test this out if you create a file called, test.js.  In this file put insert the following code:

	``` javascript
	let greeting = "hello world";
	console.log(greeting);
	```

4.	Save the file and Build (**Ctrl+B** on Windows or **Cmd+B** on Mac).  You should see something like the following in Sublime:

![Sublime Text output](https://github.com/mattduffield/es6-succinctly/blob/master/doc/sublime-text-output.png)
