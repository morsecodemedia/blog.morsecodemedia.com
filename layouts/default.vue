<template>
  <div >
    <div id="skip">
      <a class="skip-main" href="#main">Skip to main content</a>
    </div>
    <SiteHeader aria-label="site header" />
    <nuxt
      id="main"
      ref="main"
      aria-label="main"
      role="main"
    />
    <ModalExit />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SiteHeader from '~/components/global/site-header.vue'
import ModalExit from '~/components/global/modal-exit.vue'

let bodyTag = null

export default {
  name: 'App',
  components: {
    ModalExit,
    SiteHeader
  },
  computed: {
    ...mapGetters('modals', ['isModalOpen'])
  },
  watch: {
    isModalOpen: (val) => {
      if (val) {
        bodyTag.classList.add('killscroll')
      } else {
        bodyTag.classList.remove('killscroll')
      }
    }
  },
  mounted () {
    bodyTag = document.getElementsByTagName('body')[0]
    bodyTag.classList.remove('killscroll')

    if (process.browser) {
      if (this.getParameterByName('screenshot')) {
        bodyTag.classList.add('screenshot')
      } else {
        bodyTag.classList.remove('screenshot')
      }
    }

    if (this.$nuxt.$route.hash) {
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash () {
      const hash = this.$nuxt.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: 0 })
      })
    },
    getParameterByName (name, url) {
      if (process.browser) {
        if (!url) {
          url = window.location.href
        }
        name = name.replace(/[[\]]/g, '\\$&')
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
        const results = regex.exec(url)
        if (!results) {
          return null
        }
        if (!results[2]) {
          return ''
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
      }
    }
  },
  head () {
    return {
      meta: [
        { hid: 'ogurl', property: 'og:url', content: 'https://blog.morsecodemedia.com' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://blog.morsecodemedia.com' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://blog.morsecodemedia.com' + this.$route.path }
      ],
      bodyAttrs: {
        class: 'page-' + ((this.$route.path.length > 1) ? this.$route.path.slice(1).replace(new RegExp('/$'), '').replace(new RegExp('/', 'g'), '-') : 'home')
      }
    }
  }
}
</script>
