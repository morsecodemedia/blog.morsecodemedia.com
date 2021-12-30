<template>
  <section>
    <article v-for="post of posts" :key="post.slug">
      <div>
        <nuxt-link :to="`/${post.slug}`">
          <h2>{{ post.title }}</h2>
        </nuxt-link>
        <p>{{ formatDate(post.createdAt) }}</p>
        <p>{{ post.tags }}</p>
        <p>{{ post.description }}</p>
        <nuxt-link :to="`/${post.slug}`">
          Read Blog Post
        </nuxt-link>
      </div>
    </article>
    <div>
      <nuxt-link :to="prevLink">Prev page</nuxt-link>
      <nuxt-link v-if="nextPage" :to="`/page/${pageNo + 1}`">Next page</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const pageNo = parseInt(params.number)
    const articles = await $content('articles')
      .only(['title', 'description', 'createdAt', 'draft', 'slug', 'tags'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .skip(4 * (pageNo - 1))
      .fetch()

    if (!articles.length) {
      return error({ statusCode: 404, message: 'No posts found!' })
    }

    const nextPage = articles.length === 5
    const posts = nextPage ? articles.slice(0, -1) : articles
    return { nextPage, posts, pageNo }
  },
  computed: {
    prevLink () {
      return this.pageNo === 2 ? '/' : `/page/${this.pageNo - 1}`
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
