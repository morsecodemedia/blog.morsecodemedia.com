<template>
  <section>
    <article v-for="post of posts" :key="post.slug">
      <nuxt-link :to="`/${post.slug}`">
        <h2 class="title">{{ post.title }}</h2>
      </nuxt-link>
      <p class="date">{{ $format(post.createdAt) }}</p>
      <p class="tags">Posted in: {{ post.tags }}</p>
      <p>{{ post.description }}</p>
      <nuxt-link :to="`/${post.slug}`">
        Read Blog Post
      </nuxt-link>
    </article>
    <div v-if="nextPage" id="next">
      <nuxt-link to="/page/2">
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
      .only(['title', 'description', 'img', 'slug', 'draft', 'tags', 'createdAt'])
      .where({ draft: false })
      .limit(10)
      .sortBy('createdAt', 'desc')
      .fetch()

    const nextPage = articles.length === 10
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
.title {
  font-family: 'Montserrat',sans-serif,Arial;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  font-size: 30px;
  line-height: 1.2;
  text-align: left;
  width: 660px;
  max-width: 90%;
}
.date {
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.tags {
  font-size: 16px;
  margin-bottom: 10px;
}
p {
  font-family: 'Libre Baskerville', sans-serif, Arial;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  margin-bottom: 25px;
}
article {
  margin-bottom: 30px;
}
</style>
