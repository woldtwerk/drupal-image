(($, Drupal) => {
  Drupal.behaviors.testBehavior = {
    attach(context) {
      const fadeInImage = image => {
        image.style.opacity = 1;
        image.parentNode.previousElementSibling.style.opacity = 0;
      };

      context
        .querySelectorAll('.responsive-image-wrapper')
        .once('rimg')
        .forEach(rImg => {
          const image = rImg.querySelector('picture img');
          if (image.complete) {
            fadeInImage(image);
          } else {
            image.addEventListener('load', e => {
              if (e.currentTarget.complete) fadeInImage(e.currentTarget);
            });
          }
        });
    },
  };
})(jQuery, Drupal);
