<template>
  <q-layout
    view="lHh lpR fFf" class="pages-bg">

    <q-header bordered class="bg-white">

      <q-toolbar>
        <q-separator vertical color="grey-2" class="tool-bar-separator"/>

        <q-btn flat round icon="menu" color="grey-14" @click="drawer = !drawer" />

        <q-toolbar-title>
          <Search :filter="filter"/>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      :width="250"
      :breakpoint="768"
      side="left"
    >
      <div style="position: sticky; top: 0">
        <template>
          <p class="text-h6 text-center text-primary q-mt-sm sidebar-heading">SaaS Kit</p>
        </template>

        <q-separator />
        <div>
        <span class="flex justify-center items-center q-ma-sm">
          <q-avatar color="primary" class="" text-color="white">
            <img :src="user.avatar">
          </q-avatar>
        <div v-if="!miniState" class="profile-details q-ml-lg">
          <p>{{user.name}}</p>
          <p>{{user.email}}</p>
        </div>
      </span>
      </div>
      </div>

      <q-scroll-area
        :thumb-style="this.thumbStyle"
        style="height: calc(100% - 30%)"
      >
<!--        links component-->
        <EssentialLinks />
<!--        links component-->

      </q-scroll-area>
      <q-list>
        <q-item
          @click="getClientWidth"
          clickable
          v-ripple
          class="bottom-left-button"
        >
          <q-item-section avatar>
            <q-icon name="eva-npm" color="accent" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Toggle sidebar</q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Search from '../components/Search'
import EssentialLinks from '../components/navigations/EssentialLinks'
import commonMixins from '../mixins/commonMixins'
export default {
  components: { EssentialLinks, Search },
  mixins: [commonMixins],
  props: {
    filter: {
      type: String
    }
  },
  mounted () {
    console.log('search component filter on mainlayout', this.filter)
  },
  data () {
    return {
      drawer: false,
      miniState: false,
      search: 'Global Search',
      user: {
        id: 1,
        name: 'Sierra Ferguson',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        email: 's.ferguson@gmail.com'
      }
    }
  },
  methods: {
    getClientWidth () {
      // get widows/client width / viewport
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      if (width < 770) {
        this.drawer = false
      } else {
        this.miniState = !this.miniState
      }
    }
  }
}
</script>

<style scoped>
  .pages-bg {
    background-color: #f5f6f8;
  }
  .sidebar-heading{
    max-height: 26px;
    font-size: 18px;
    overflow: hidden;
  }
  .tool-bar-separator{
    margin-left: -12px
  }
  .profile-details{
    overflow: hidden;
  }
  .bottom-left-button {
    position: absolute;
    left:    0;
    bottom:  0;
    width: 100%;
  }
</style>
