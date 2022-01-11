
<template>
  <section>
    <h1>Articles posted in {{ tag.alt }} (todo: tag.length)</h1>
    <article v-for="post of posts" :key="post.slug">
      <nuxt-link :to="`/${post.slug}`">
        <h2 class="title">{{ post.title }}</h2>
      </nuxt-link>
      <p class="date">{{ $format(post.createdAt) }}</p>
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
  head () {
    return {
      title: 'Posts tagged under ' + this.tag.alt,
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: 'Post tagged under ' + this.tag.alt },
        { hid: 'twtitle', name: 'twitter:title', content: 'Post tagged under ' + this.tag.alt },
        { hid: 'googlename', itemprop: 'name', content: 'Post tagged under ' + this.tag.alt }
      ],
      bodyAttrs: {
        class: 'page-' + ((this.$route.path.length > 1) ? this.$route.path.slice(1).replace(new RegExp('/$'), '').replace(new RegExp('/', 'g'), '-') : 'home')
      }
    }
  }
}
</script>

<style>

</style>
