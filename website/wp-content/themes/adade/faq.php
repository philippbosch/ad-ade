<?php
/**
 * Template Name: FAQ Page 
 * Description: A Page Template that with some special sauce
 *
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */

get_header(); ?>

		<a href="/" id="button"><img src="/wp-content/uploads/2012/07/circle-back-small.png"></a>
		
		<div id="primary">
			<div id="content" role="main">

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'page' ); ?>

				<?php endwhile; // end of the loop. ?>

			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_footer(); ?>