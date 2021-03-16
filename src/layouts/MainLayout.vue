<template>
  <q-layout view="lHh lpR fFf" class="pages-bg">

    <q-header bordered class="bg-white">

      <q-toolbar>
        <q-separator vertical color="grey-2" class="tool-bar-separator"/>

        <q-btn flat round icon="menu" color="grey-14" @click="drawer = !drawer" />

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
          @click="task"
          to="/tasks"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="splitscreen" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Tasks</q-item-section>
        </q-item>
            <q-tabs
              v-if="isTask"
              v-model="tab"
              vertical
              no-caps
            >
              <q-item class="row justify-center" to="/tasks/Active" exact clickable>
                <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="orange" color="orange" />
                <span class="text-black q-mt-sm">Active</span>
              </q-item>
              <q-item class="row justify-center q-ml-lg" to="/tasks/Completed" exact clickable>
                <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="green" color="green" />
                <span class="text-black q-mt-sm">Completed</span>
              </q-item>
              <q-item class="row justify-center" to="/tasks/Ended" exact clickable>
                <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="red" color="red" />
                <span class="text-black q-mt-sm">Ended</span>
              </q-item>
            </q-tabs>

        <q-item
          @click="email"
          to="/email"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="mail_outline" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Email</q-item-section>
        </q-item>
        <q-tabs
          v-if="isEmail"
          v-model="tab"
          vertical
          no-caps
        >
          <q-item class="row justify-center" to="/email/Draft" exact clickable>
            <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="orange" color="orange" />
            <span class="text-black q-mt-sm q-ml-xs">Draft</span>
          </q-item>
          <q-item class="row justify-center q-ml-lg" to="/email/Scheduled" exact clickable>
            <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="green" color="indigo" />
            <span class="text-black q-mt-sm q-ml-xs">Scheduled</span>
          </q-item>
          <q-item class="row justify-center" to="/email/Sent" exact clickable>
            <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="red" color="green" />
            <span class="text-black q-mt-sm q-mr-md">&nbsp;Sent</span>
          </q-item>
          <q-item class="row justify-center" to="/email/Archived" exact clickable>
            <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="red" color="red" />
            <span class="text-black q-mt-sm q-mr-md" style="margin-right: -10px"> Archived</span>
          </q-item>
        </q-tabs>

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
          @click="deals"
          to="/deals"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="view_week" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Deals</q-item-section>
        </q-item>
        <q-tabs
          v-if="isDeal"
          v-model="tab"
          vertical
          no-caps
        >
          <q-item class="row justify-center" to="/deals/Low" exact clickable>
            <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="orange" color="orange" />
            <span class="text-black q-mt-sm q-mr-xl">Low</span>
          </q-item>
          <q-item class="row justify-center q-ml-lg" to="/deals/High" exact clickable>
            <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="green" color="green" />
            <span class="text-black q-mt-sm q-mr-xl">High</span>
          </q-item>
          <q-item class="row justify-center" to="/deals/Urgent" exact clickable>
            <q-icon class="radio_icon" keep-color size="xs" name="radio_button_unchecked" val="red" color="red" />
            <span class="text-black q-mt-sm q-mr-xl">Urgent</span>
          </q-item>
        </q-tabs>

        <q-separator />

        <q-item
          to="/settings"
          clickable
          v-ripple
          class="q-mt-md"
        >
          <q-item-section avatar>
            <q-icon name="more_horiz" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Settings</q-item-section>
        </q-item>

      </q-list>

      <q-list
        class="large-screen-only"
      >
        <q-item
          @click="drawer = !drawer"
          clickable
          v-ripple
          style="margin-top: 400px"
        >
          <q-item-section avatar>
            <q-icon name="eva-npm" color="accent" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Toggle sidebar</q-item-section>
        </q-item>
      </q-list>

      <q-list
        class="relative small-screen-only q-mt-md"
      >
        <q-item
          @click="drawer = !drawer"
          clickable
          v-ripple
          class="q-mb-md"
        >
          <q-item-section avatar>
            <q-icon name="eva-npm" color="accent" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Toggle sidebar</q-item-section>
        </q-item>
      </q-list>

      <div>

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
      search: 'Global Search',
      user: {
        id: 1,
        name: 'Sierra Ferguson',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        email: 's.ferguson@gmail.com'
      },
      tab: '',
      isTask: false,
      isEmail: false,
      isDeal: false
    }
  },

  methods: {
    task () {
      this.isTask = !this.isTask
    },
    email () {
      this.isEmail = !this.isEmail
    },
    deals () {
      this.isDeal = !this.isDeal
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
  .radio_icon{
    margin-top: 8px;
  }

</style>
