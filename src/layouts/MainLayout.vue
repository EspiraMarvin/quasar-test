<template>
  <q-layout view="lHh lpR fFf" class="pages-bg">

    <q-header bordered class="bg-white">

      <q-toolbar>
        <q-separator vertical color="grey-2" class="tool-bar-separator"/>

        <q-btn flat round icon="menu" color="grey-14" @click="drawer = !drawer" />

        <q-toolbar-title>
          <Search />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="283"
      :breakpoint="500"
      side="left"
    >
      <template>
        <p class="text-h6 text-center text-primary q-mt-sm sidebar-heading">SaaS Kit</p>
      </template>

      <q-separator />
      <div class="large-screen-only">
        <span class="row justify-center q-ma-md">
          <q-avatar color="primary" class="q-mr-xs" text-color="white">
            <img :src="user.avatar">
          </q-avatar>
        <div v-if="!miniState" class="profile-details q-ml-lg q-mr-xs">
          <p>{{user.name}}</p>
          <p>{{user.email}}</p>
        </div>
      </span>
      </div>

      <div class="small-screen-only">
        <span class="row justify-center q-ma-md">
          <q-avatar color="primary" class="q-mr-xs" text-color="white">
            <img :src="user.avatar">
          </q-avatar>
        <div class="profile-details q-ml-lg q-mr-xs">
          <p>{{user.name}}</p>
          <p>{{user.email}}</p>
        </div>
      </span>
      </div>

      <EssentialLinks />

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Search from '../components/Search'
import EssentialLinks from '../components/EssentialLinks'
export default {
  components: { EssentialLinks, Search },
  data () {
    return {
      drawer: false,
      miniState: true,
      search: 'Global Search',
      user: {
        id: 1,
        name: 'Sierra Ferguson',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        email: 's.ferguson@gmail.com'
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

</style>
