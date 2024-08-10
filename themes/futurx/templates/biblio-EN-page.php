<?php

    /**
     * Template Name: Bibliografia ENG
     */
?>
<?php get_header('biblio-en'); ?>

<main class="main" role="main">
    <div class="container">

        <?php while ( have_posts() ) : the_post(); ?>

            <article <?php post_class(); ?>>

                <header role="heading">
                    <h1 class="post__title"><?php the_title(); ?></h1>
                </header>

                <?php the_content(); ?>

            </article>

        <?php endwhile; ?>

    </div>
    <div class="footer-image">
        <img src="<?php echo get_template_directory_uri() . '/assets/images/biblio-footer.jpg'; ?>" />
    </div>
</main>

<?php get_footer(); ?>
