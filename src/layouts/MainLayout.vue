<template>
  <q-layout view="lHh lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>

        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          <div class="row">
              <q-input
                placeholder="Global Search"
                class="q-ma-xs q-ml-xs-xs bg-white col-xs-9 col-sm-10 col-md-11"
                filled
                dense
              >
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>
            <q-space />

            <q-icon name="notifications" class="q-ma-sm" size="md" />
          </div>

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
      bordered
    >
      <p
        class="text-h5 text-primary text-center q-mt-sm"
      >
        SaaS Kit
      </p>

      <q-separator />

      <q-list>
        <q-item
          to="/"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="dashboard" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Dashboard</q-item-section>
        </q-item>

        <q-item
          to="/tasks"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="splitscreen" size="sm" />
          </q-item-section>

          <q-item-section>Tasks</q-item-section>
        </q-item>

        <q-item
          to="/emails"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="mail_outline" size="sm" />
          </q-item-section>

          <q-item-section>Email</q-item-section>
        </q-item>

        <q-item
          to="/contacts"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="perm_identity" size="sm" />
          </q-item-section>

          <q-item-section>Contacts</q-item-section>
        </q-item>

        <q-item
          to="/chat"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="chat_bubble_outline" size="sm" />
          </q-item-section>

          <q-item-section>Chat</q-item-section>
        </q-item>

        <q-item
          to="/deals"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="view_week" size="sm" />
          </q-item-section>

          <q-item-section>Deals</q-item-section>
        </q-item>

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

          <q-item-section>Settings</q-item-section>
        </q-item>

      </q-list>

      <div>
        <q-list
          class="large-screen-only"
          style="height:10px; margin-bottom: 0; margin-top: 200px; position: relative; min-height: 200px"
        >
          <q-item
            @click="drawer = !drawer"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="view_sidebar" size="sm" />
            </q-item-section>

            <q-item-section>Toggle sidebar</q-item-section>
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
              <q-icon name="view_sidebar" size="sm" />
            </q-item-section>

            <q-item-section>Toggle sidebar</q-item-section>
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
export default {
  data () {
    return {
      drawer: false,
      miniState: true
    }
  }
}
</script>

<style lang="sass">

</style>
