<template>
    <div>
      <q-list>
        <div  v-for="link in links" :key="link.to">
          <q-item
            v-if="!link.expansionLinks"
            :to="link.to"
            clickable
            v-ripple
            exact
          >
            <div class="flex items-center justify-center">
              <q-item-section avatar>
                <q-icon :name="link.icon" size="sm" />
              </q-item-section>

              <q-item-section class="text-subtitle1">
                <span>{{ link.name }}</span>
              </q-item-section>
            </div>
          </q-item>

          <q-expansion-item
            v-else
            :icon="link.icon"
            :label="link.name"
            :to="link.to"
            :header-style="{ fontSize: '16px' }"
            :content-inset-level="0.9"
          >
            <div v-for="link in link.expansionLinks" :key="link.index">
              <q-item :to="link.itemTo" exact clickable dense>
                <div class="flex items-center justify-center">
                  <q-icon class="q-mr-xs q-my-sm" keep-color size="xs" name="radio_button_unchecked" val="orange" :color="link.color" />
                  <span class="text-black">{{ link.item }}</span>
                </div>
              </q-item>
            </div>
          </q-expansion-item>
        </div>
      </q-list>

    </div>
</template>

<script>
export default {
  name: 'EssentialLinks',
  data () {
    return {
      links: [
        { to: '/', name: 'Dashboard', icon: 'dashboard' },
        {
          to: '/tasks',
          name: 'Tasks',
          icon: 'splitscreen',
          expansionLinks: [
            { itemTo: '/tasks/Active', item: 'Active', color: 'orange' },
            { itemTo: '/tasks/Completed', item: 'Completed', color: 'green' },
            { itemTo: '/tasks/Ended', item: 'Ended', color: 'red' }
          ]
        },
        {
          to: '/email',
          name: 'Emails',
          icon: 'mail_outline',
          expansionLinks: [
            { itemTo: '/email/Draft', item: 'Draft', color: 'orange' },
            { itemTo: '/email/Scheduled', item: 'Scheduled', color: 'indigo' },
            { itemTo: '/email/Sent', item: 'Sent', color: 'green' },
            { itemTo: '/email/Archived', item: 'Archived', color: 'red' }
          ]
        },
        { to: '/contacts', name: 'Contacts', icon: 'perm_identity' },
        { to: '/chat', name: 'Chat', icon: 'chat_bubble_outline' },
        {
          to: '/deals',
          name: 'Deals',
          icon: 'view_week',
          expansionLinks: [
            { itemTo: '/deals/Low', item: 'Low', color: 'orange' },
            { itemTo: '/deals/High', item: 'Scheduled', color: 'green' },
            { itemTo: '/deals/Urgent', item: 'Archived', color: 'red' }
          ]
        },
        { to: '/settings', name: 'Settings', icon: 'more_horiz' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
