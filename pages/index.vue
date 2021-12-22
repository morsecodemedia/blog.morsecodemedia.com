<template>
  <section>
    <article v-for="article of articles" :key="article.slug">
      <img :src="article.img" />
      <div>
        <NuxtLink :to="article.slug">
          <h2>{{ article.title }}</h2>
        </NuxtLink>
        <p>{{ article.createdAt }}</p>
        <p>{{ article.tags }}</p>
        <p>{{ article.description }}</p>
        <NuxtLink :to="article.slug">
          Read Blog Post
        </NuxtLink>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Homepage',
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'draft', 'tags', 'createdAt'])
      .where({ draft: false })
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
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
