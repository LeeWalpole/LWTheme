<?php $google_analytics = get_field('google_analytics','options'); ?>
<?php if($google_analytics) : ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo esc_attr($google_analytics); ?>"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '<?php echo esc_attr($google_analytics); ?>');
</script>
<?php endif; ?>