
<template>
  <section>
    <h1>Articles posted in {{ tag.alt }}</h1>
    <article v-for="post of posts" :key="post.slug">
      <nuxt-link :to="`/${post.slug}`">
        <h2 class="title">{{ post.title }}</h2>
      </nuxt-link>
      <p class="date">{{ formatDate(post.createdAt) }}</p>
      <p>{{ post.description }}</p>
      <nuxt-link :to="`/${post.slug}`">
        Read Blog Post
      </nuxt-link>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Tags',
  async asyncData ({ $content, params }) {
    const tags = await $content('tags')
      .where({
        slug: { $contains: params.tag }
      })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const posts = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'draft', 'tags', 'createdAt'])
      .where({
        draft: false,
        tags: { $contains: tag.name }
      })
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts,
      tag
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head () {
    return {
      title: '',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: '' },
        { hid: 'twtitle', name: 'twitter:title', content: '' },
        { hid: 'googlename', itemprop: 'name', content: '' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'ogdescription', property: 'og:description', content: '' },
        { hid: 'twdescription', name: 'twitter:description', content: '' },
        { hid: 'googledescription', itemprop: 'description', content: '' },
        { hid: 'ogurl', property: 'og:url', content: 'https://www.domain.com' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://www.domain.com' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://www.domain.com' + this.$route.path }
      ]
    }
  }
}
</script>

<style>

</style>
