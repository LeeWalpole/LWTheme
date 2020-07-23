<link rel="preload" as="font" href="<?php echo get_template_directory_uri(); ?>/fonts/Geomanist-Regular.woff2" type="font/woff2" crossorigin="anonymous">
<link rel="preload" as="font" href="<?php echo get_template_directory_uri(); ?>/fonts/Geomanist-Bold.woff2" type="font/woff2" crossorigin="anonymous">
<link rel="preload" as="font" href="<?php echo get_template_directory_uri(); ?>/fonts/Geomanist-Black.woff2" type="font/woff2" crossorigin="anonymous">
<?php echo "<style>
@font-face {
	font-family: 'Geomanist';
    src: url('".get_template_directory_uri()."/fonts/Geomanist-Regular.woff2') format('woff2'),
	url('".get_template_directory_uri()."/fonts/Geomanist-Regular.woff') format('woff');
	font-weight: 400;
	font-style: normal;
	font-display:swap;
}
@font-face {
	font-family: 'Geomanist';
	src: url('".get_template_directory_uri()."/fonts/Geomanist-Bold.woff2') format('woff2'),
	url('".get_template_directory_uri()."/fonts/Geomanist-Bold.woff') format('woff');
	font-weight: bold;
	font-style: normal;
	font-display:swap;
}

@font-face {
	font-family: 'Geomanist';
	src: url('".get_template_directory_uri()."/fonts/Geomanist-Black.woff2') format('woff2'),
	url('".get_template_directory_uri()."/fonts/Geomanist-Black.woff') format('woff');
	font-weight: 900;
	font-style: normal;
	font-display:swap;
}


@font-face {
	font-family: 'Geomanist';
    src: url('".get_template_directory_uri()."/fonts/Geomanist-Regular.woff2') format('woff2'),
	url('".get_template_directory_uri()."/fonts/Geomanist-Regular.woff') format('woff');
	font-weight: normal;
	font-style: normal;
	font-display:swap;
}
@font-face {
	font-family: 'GeomanistBold';
	src: url('".get_template_directory_uri()."/fonts/Geomanist-Bold.woff2') format('woff2'),
	url('".get_template_directory_uri()."/fonts/Geomanist-Bold.woff') format('woff');
	font-weight: normal;
	font-style: normal;
	font-display:swap;
}

@font-face {
	font-family: 'GeomanistHeavy';
	src: url('".get_template_directory_uri()."/fonts/Geomanist-Black.woff2') format('woff2'),
	url('".get_template_directory_uri()."/fonts/Geomanist-Black.woff') format('woff');
	font-weight: normal;
	font-style: normal;
	font-display:swap;
}

</style>"; ?>
<style>
:root {    
--font-1: 'Geomanist', Helvetica, Arial, sans-serif;    
--font-2: 'Geomanist', Helvetica, Arial, sans-serif;    
--font-normal: 'Geomanist', Helvetica, Arial, sans-serif;    
--font-bold: 'GeomanistBold', Helvetica, Arial, sans-serif;    
--font-heavy: 'GeomanistHeavy', Helvetica, Arial, sans-serif;    
--regular: 400;    
--bold: bold;    
--heavy: 900;
}

.font { font-family:var(--font)!important; }
.font-bold { font-family:var(--font-bold)!important; }
.font-heavy { font-family:var(--font-heavy)!important; color:red; }

</style>
<!-- 	font-display: swap; -->