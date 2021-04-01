<template>
    <div>
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
  .radio_icon{
    margin-top: 8px;
  }
</style>
