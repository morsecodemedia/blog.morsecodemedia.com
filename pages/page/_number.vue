<template>
  <section>
    <article v-for="post of posts" :key="post.slug">
      <nuxt-link :to="`/${post.slug}`">
        <h2 class="title">{{ post.title }}</h2>
      </nuxt-link>
      <p class="date">{{ $format(post.createdAt) }}</p>
      <p class="tags">Posted in:</p>
      <ul v-if="post.tags">
        <li v-for="(t, index) in post.tags" :key="index">
          <nuxt-link :to="`/tag/${t.replace(' ', '-')}`">
            {{ t }}
          </nuxt-link>
        </li>
      </ul>
      <p>{{ post.readingStats.text }}</p>
      <p>{{ post.description }}</p>
      <nuxt-link :to="`/${post.slug}`">
        Read Blog Post
      </nuxt-link>
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
      .sortBy('createdAt', 'desc')
      .limit(10)
      .skip(9 * (pageNo - 1))
      .fetch()

    if (!articles.length) {
      return error({ statusCode: 404, message: 'No posts found!' })
    }

    const nextPage = articles.length === 10
    const posts = nextPage ? articles.slice(0, -1) : articles
    return { nextPage, posts, pageNo }
  },
  computed: {
    prevLink () {
      return this.pageNo === 2 ? '/' : `/page/${this.pageNo - 1}`
    }
  },
  head () {
    return {
      title: 'Technical writings of Brandon Morse - Page ' + this.pageNo + ' | a morsecodemedia project',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: 'Technical writings of Brandon Morse - Page ' + this.pageNo + ' | a morsecodemedia project' },
        { hid: 'twtitle', name: 'twitter:title', content: 'Technical writings of Brandon Morse - Page ' + this.pageNo + ' | a morsecodemedia project' },
        { hid: 'googlename', itemprop: 'name', content: 'Technical writings of Brandon Morse - Page ' + this.pageNo + ' | a morsecodemedia project' }
      ],
      bodyAttrs: {
        class: 'page-' + ((this.$route.path.length > 1) ? this.$route.path.slice(1).replace(new RegExp('/$'), '').replace(new RegExp('/', 'g'), '-') : 'home')
      }
    }
  }
}
</script>
