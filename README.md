
Getting Started
---------------

1. Search for `'wordpress-starter-theme'` (inside single quotations) to capture the text domain.
2. Search for `wordpress_starter_theme_` to capture all the function names.
3. Search for `Text Domain: wordpress-starter-theme` in style.css.
4. Search for <code>&nbsp;wordpress_starter_theme</code> (with a space before it) to capture DocBlocks.
5. Search for `wordpress-starter-theme-` to capture prefixed handles.
6. Search for `http://domain.dev/` to change local proxy name. 

OR

1. Search for: `'wordpress-starter-theme'` and replace with: `'my-theme'`
2. Search for: `wordpress_starter_theme_` and replace with: `my_theme_`
3. Search for: `Text Domain: wordpress-starter-theme` and replace with: `Text Domain: my-theme` in style.css.
4. Search for: <code>&nbsp;wordpress_starter_theme</code> and replace with: <code>&nbsp;my_theme</code>
5. Search for: `wordpress-starter-theme-` and replace with: `my-theme-`
6. Search for: `http://domain.dev/` and replace it with: `mylocaldomain.dev`

Remember to update the stylesheet header in `style.css` and the links in `footer.php` with your own information. 

Write npm run start to start developing 

npm run build for builds 

Note that you have to delete or comment the enqueue of the dist that webpack outputs.  
That is it. 



--------------------------------------------------

Things left to do.

- Make react loaders only listen to certain. 