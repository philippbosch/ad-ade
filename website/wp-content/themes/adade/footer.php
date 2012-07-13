<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

	</div><!-- #main -->

	<footer id="colophon" role="contentinfo">

			<?php
				/* A sidebar in the footer? Yep. You can can customize
				 * your footer with three columns of widgets.
				 */
				if ( ! is_404() )
					get_sidebar( 'footer' );
			?>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

	<a href="http://www.hfg-shop.de/" id="hfgshop"><img src="http://ad-ade.de/wp-content/uploads/2012/07/hfgshop.png"></a>

</body>
</html>