<template>
  <article>
    <h1 class="title">{{ article.title }}</h1>
    <div class="article-stats">
      <p class="date">{{ $format(article.createdAt) }}</p>
      <p>{{ article.readingStats.text }}</p>
    </div>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head () {
    return {
      title: this.article.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'ogtitle', property: 'og:title', content: this.article.title },
        { hid: 'twtitle', name: 'twitter:title', content: this.article.title },
        { hid: 'googlename', itemprop: 'name', content: this.article.title },
        { hid: 'description', name: 'description', content: this.article.description },
        { hid: 'ogdescription', property: 'og:description', content: this.article.description },
        { hid: 'twdescription', name: 'twitter:description', content: this.article.description },
        { hid: 'googledescription', itemprop: 'description', content: this.article.description },
        { hid: 'ogurl', property: 'og:url', content: 'https://blog.morsecodemedia.com' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://blog.morsecodemedia.com' + this.$route.path },
        { property: 'article:published_time', content: this.article.createdAt },
        { property: 'article:modified_time', content: this.article.updatedAt },
        { property: 'article:tag', content: this.article.tags ? this.article.tags.toString() : '' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://blog.morsecodemedia.com' + this.$route.path }
      ]
    }
  }
}
</script>
