<template>
  <section>
    <article v-for="post of posts" :key="post.slug">
      <div>
        <NuxtLink :to="post.slug">
          <h2>{{ post.title }}</h2>
        </NuxtLink>
        <p>{{ post.createdAt }}</p>
        <p>{{ post.tags }}</p>
        <p>{{ post.description }}</p>
        <NuxtLink :to="post.slug">
          Read Blog Post
        </NuxtLink>
      </div>
    </article>
    <div id="next" v-if="nextPage">
      <NuxtLink to="/page/2">
        Next Page
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Homepage',
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'draft', 'tags', 'createdAt'])
      .where({ draft: false })
      .limit(5)
      .sortBy('createdAt', 'desc')
      .fetch()

    const nextPage = articles.length === 5
    const posts = nextPage ? articles.slice(0, -1) : nextPage
    return {
      posts, nextPage
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
