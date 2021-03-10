<template>
  <q-layout view="lHh lpR fFf">

    <q-drawer
      :width="283"
      show-if-above
      v-model="left"
      side="left"
      bordered
    >
      <span
        class="text-h5 q-ma-xl"
      >
        SaaS Kit
      </span>

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
          to="/about"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="splitscreen" size="sm" />
          </q-item-section>

          <q-item-section>Tasks</q-item-section>
        </q-item>

        <q-item
          to="/about"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="mail_outline" size="sm" />
          </q-item-section>

          <q-item-section>Email</q-item-section>
        </q-item>

        <q-item
          to="/about"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="perm_identity" size="sm" />
          </q-item-section>

          <q-item-section>Contacts</q-item-section>
        </q-item>

        <q-item
          to="/about"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="chat_bubble_outline" size="sm" />
          </q-item-section>

          <q-item-section>Chat</q-item-section>
        </q-item>

        <q-item
          to="/about"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="view_week" size="sm" />
          </q-item-section>

          <q-item-section>Deals</q-item-section>
        </q-item>
      </q-list>
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
      left: false
    }
  }
}
</script>

<style lang="sass">
  .header-icon
    position: absolute
    bottom: 0
    left: 50%
    transform: translateX(-50%)
</style>
