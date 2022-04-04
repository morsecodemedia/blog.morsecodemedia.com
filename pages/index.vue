<template>
  <section>
    <article v-for="post of posts" :key="post.slug">
      <nuxt-link :to="`/${post.slug}`" class="link-title">
        <h2 class="title">{{ post.title }}</h2>
      </nuxt-link>
      <div class="article-stats">
        <p class="date">{{ $format(post.createdAt) }}</p>
        <p>{{ post.readingStats.text }}</p>
      </div>
      <p>{{ post.description }}</p>
      <nuxt-link :to="`/${post.slug}`" class="link-read" :aria-label="`Read ${post.title}`">
        Read Blog Post
      </nuxt-link>
    </article>
    <div v-if="nextPage" id="next" class="pagination-links">
      <nuxt-link to="/page/2" aria-label="Next Page">
        Next Page
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Homepage',
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .where({ draft: false })
      .limit(10)
      .sortBy('createdAt', 'desc')
      .fetch()

    const nextPage = articles.length === 10
    const posts = nextPage ? articles.slice(0, -1) : nextPage
    return {
      posts, nextPage
    }
  }
}
</script>
