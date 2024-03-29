<?php if (is_post_type_archive() || is_tax() || is_category() || is_archive() || is_page() || is_tag()) { ?>
<?php $acf_fix = get_queried_object();  ?>
<?php } else { 
$acf_fix = $post->ID;
} 
?>

<?php global $post; if( have_rows('teasers',$acf_fix) ) : ?>
<?php while( have_rows('teasers',$acf_fix) ) : the_row();  ?>
<?php // $counter = 0;?>
<?php if( have_rows('teaser',$acf_fix) ) : while( have_rows('teaser',$acf_fix) ) : the_row(); $counter++; ?>



<?php 
$category = get_the_category(); 
$kicker = get_sub_field('kicker') ?: $category[0]->cat_name;
$headline = get_sub_field('headline');
$lead = get_sub_field('lead');
$url = get_sub_field('url');
$acf_image_thumbnail = wp_get_attachment_image_src(get_sub_field('image'), '')[0]; 
$image_thumbnail = Jetpack_PostImages::fit_image_url ($acf_image_thumbnail, 360, $teaser_image_height);
$link = get_sub_field('url');
$link_target = $link['target'] ? $link['target'] : '_self'; 
$link_title = $link['title'];
$link_url = $link['url'];
?>



<?php if ( has_post_thumbnail() ) { 
    $featured_image_thumbnail = get_the_post_thumbnail_url("thumbnail"); 
    $featured_image_medium = get_the_post_thumbnail_url("medium"); 
    $featured_image_large = get_the_post_thumbnail_url("large"); 
} else { 
    $featured_image_thumbnail = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    $featured_image_medium = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    $featured_image_large = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
}
?>


<a href="<?php echo $link_url ?: "javascript:void(0)"; ?>" title="<?php echo esc_attr($link_title); ?>"
target="<?php echo esc_attr( $link_target ); ?>" class="teaser bg-white">
    <figure class="z-index-1 ratio" data-ratio="<?php echo $ratio ?: "3:2"; ?>">
        <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            alt="<?php echo esc_attr($link_title); ?>"
            data-src="<?php echo esc_attr($featured_image_thumbnail); ?>" loading="lazy" class="lazyload">
    </figure>
    <?php if ($teaser_styles == "standard_teasers") : ?>
        <header class="header">
        <?php if( $kicker ) : ?><strong class="kicker"><?php echo $kicker ?></strong><?php endif; ?>
        <h4 class="headline"><?php echo $headline; ?></h4>
        <?php if( $lead ) : ?><em class="lead w-safe"><?php echo $lead; ?></em><?php endif; ?>
        </header>
    <?php endif; ?>

</a>
<?php endwhile; endif; ?>
<?php endwhile; ?>
<?php endif; //teasers loops ?>