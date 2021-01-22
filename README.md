Drupal Module which provides:  
- 0 CLS responsive Images
- data image thumbnail
- blurup effect
- native chrome lazyloading

Drupal Responsive Images Core Module does not provide Images with explicit width and height. When you do a Lighthouse Test you'll get notified of that. 
Also you get a bad CLS value, because the Browser doesn't know the dimensions of the Image. That means when the image is loaded the layout will be pushed
downwards. You can learn more about CLS here: https://web.dev/cls/

The module works a bit like gatsby image. It adds a blurry thumnail as data and sets the thumbnail opacity to 0 when the real Image is loaded.
It also supports Art Direction, but only for different Breakpoints (which makes sense I guess).

Add this to your composer.json to install:

```json
{
  ...
  "repositories": [
    {
        "type": "package",
        "package": {
            "name": "drupal/woldtwerk_image",
            "version": "dev-master",
            "type":"drupal-module",
            "source": {
                "url": "https://github.com/woldtwerk/drupal-image",
                "type": "git",
                "reference": "master"
            }
        }
    }
  ],
  ...
}
```

View in action: https://codepen.io/wiwo/pen/gOwJYBd
