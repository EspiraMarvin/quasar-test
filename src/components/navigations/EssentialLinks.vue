<template>
    <div>
      <q-list>

        <q-item
          to="/"
          clickable
          v-ripple
          exact
        >
          <div class="flex items-end">
            <q-item-section avatar>
              <q-icon name="dashboard" size="sm" />
            </q-item-section>

            <q-item-section class="text-subtitle1">
              <span>Dashboard</span>
            </q-item-section>
          </div>
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
          vertical
          class="tab-spacing"
        >
          <q-item class="dropdown-list" to="/tasks/Active" exact clickable>
              <q-icon class="q-mr-xs" style="" keep-color size="xs" name="radio_button_unchecked" val="orange" color="orange" />
            <span class="text-black">Active</span>
          </q-item>
          <q-item class="dropdown-list" to="/tasks/Completed" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="green" color="green" />
            <span class="text-black">Completed</span>
          </q-item>
          <q-item class="dropdown-list" to="/tasks/Ended" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="red" color="red" />
            <span class="text-black">Ended</span>
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
          vertical
          no-caps
          class="tab-spacing"
        >
          <q-item class="dropdown-list" to="/email/Draft" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="orange" color="orange" />
            <span class="text-black">Draft</span>
          </q-item>
          <q-item class="dropdown-list" to="/email/Scheduled" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="green" color="indigo" />
            <span class="text-black">Scheduled</span>
          </q-item>
          <q-item class="dropdown-list" to="/email/Sent" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="red" color="green" />
            <span class="text-black">&nbsp;Sent</span>
          </q-item>
          <q-item class="dropdown-list" to="/email/Archived" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="red" color="red" />
            <span class="text-black" style="margin-right: -10px"> Archived</span>
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
          vertical
          class="tab-spacing"
        >
          <q-item class="dropdown-list" to="/deals/Low" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="orange" color="orange" />
            <span class="text-black">Low</span>
          </q-item>
          <q-item class="dropdown-list" to="/deals/High" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="green" color="green" />
            <span class="text-black">High</span>
          </q-item>
          <q-item class="dropdown-list" to="/deals/Urgent" exact clickable>
            <q-icon class="q-mr-xs" keep-color size="xs" name="radio_button_unchecked" val="red" color="red" />
            <span class="text-black">Urgent</span>
          </q-item>
        </q-tabs>

        <q-separator />

        <q-item
          to="/settings"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="more_horiz" size="sm" />
          </q-item-section>

          <q-item-section class="text-subtitle1">Settings</q-item-section>
        </q-item>

      </q-list>

    </div>
</template>

<script>
export default {
  name: 'EssentialLinks',
  data () {
    return {
      drawer: false,
      miniState: true,
      isTask: false,
      isEmail: false,
      isDeal: false,
      links: [
        {
          to: '/',
          name: 'Dashboard',
          icon: ''
        },
        {
          to: '/tasks',
          name: 'Tasks',
          icon: ''

        }
      ]
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
  .dropdown-list{
    align-items: center;
    justify-content: start;
    margin-left: 50px;
    margin-top: -1px;
  }
  .tab-spacing{
    margin-top: -10px;
    margin-bottom: -10px;
  }
</style>
