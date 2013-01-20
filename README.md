# voxel-portal-gun

A portal gun. Shoot portals and jump through them. Made using
[@substack](https://github.com/substack)'s
[voxel-portal](https://github.com/substack/voxel-portal).

# example

[View this example](http://shama.github.com/voxel-portal-gun)

``` js
// Create a portal gun by giving it a copy of the game
var shoot = require('voxel-portal-gun')(game);

// on mouseup, shoot a portal
window.addEventListener('mouseup', shoot.bind(this), false);
```

# install

With [npm](https://npmjs.org) do:

```
npm install voxel-portal-gun
```

Use [browserify](http://browserify.org) to `require('voxel-portal-gun')`.

## release history
* 0.1.0 - initial release

## license
Copyright (c) 2013 Kyle Robinson Young<br/>
Licensed under the MIT license.