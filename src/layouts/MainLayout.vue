<template>
  <q-layout view="lHh lpR fFf" class="pages-bg">

    <q-header bordered class="bg-white">

      <q-toolbar>
        <q-separator vertical color="grey-2" class="tool-bar-separator"/>

        <q-btn dense flat round icon="menu" color="grey-14" @click="drawer = !drawer" />

        <q-toolbar-title>
         <Search :search="search" />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="220"
      :breakpoint="500"
      side="left"
    >
      <template>
        <p class="text-h6 text-center text-primary q-mt-sm sidebar-heading">SaaS Kit</p>
      </template>

      <q-separator />

      <q-list>
        <q-item
          to="/"
          clickable
          v-ripple
          exact
        >
          <q-item-section avatar>
            <q-icon name="dashboard" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Dashboard</q-item-section>
        </q-item>

        <q-item
          to="/tasks"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="splitscreen" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Tasks</q-item-section>
        </q-item>

        <q-item
          to="/email"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="mail_outline" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Email</q-item-section>
        </q-item>

        <q-item
          to="/contacts"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="perm_identity" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Contacts</q-item-section>
        </q-item>

        <q-item
          to="/chat"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="chat_bubble_outline" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Chat</q-item-section>
        </q-item>

        <q-item
          to="/deals"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="view_week" style="color: grey" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Deals</q-item-section>
        </q-item>

        <q-separator />

        <q-item
          to="/settings"
          clickable
          v-ripple
          class="q-mt-md"
        >
          <q-item-section avatar>
            <q-icon name="more_horiz" color="accent" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Settings</q-item-section>
        </q-item>

      </q-list>

      <div>
        <q-list
          class="large-screen-only"
          style="height:10px; margin-bottom: 0; margin-top: 180px; position: relative; min-height: 200px"
        >
          <q-item
            @click="drawer = !drawer"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="eva-npm" color="accent" size="sm" />
            </q-item-section>

            <q-item-section class="text-subtitle1">Toggle sidebar</q-item-section>
          </q-item>
        </q-list>

        <q-list
          class="small-screen-only q-mt-xl-lg"
          style="margin-bottom: 0; margin-top: 130px; position: relative"
        >
          <q-item
            @click="drawer = !drawer"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="eva-npm" color="accent" size="sm" />
            </q-item-section>

            <q-item-section class="text-subtitle1">Toggle sidebar</q-item-section>
          </q-item>
        </q-list>

      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Search from '../components/Search'
export default {
  components: { Search },
  data () {
    return {
      drawer: false,
      miniState: true,
      search: 'Global Search'
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

</style>
