<?php

    /**
     * Template Name: Home ingles
     */
?>
<?php get_header('en'); ?>

<main class="main" role="main">
    <div class="container">

        <?php while ( have_posts() ) : the_post(); ?>

            <article <?php post_class(); ?>>

                <?php the_content(); ?>

            </article>

        <?php endwhile; ?>

    </div>
</main>

<?php get_footer(); ?>
