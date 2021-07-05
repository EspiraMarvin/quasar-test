<template>
    <div class="flex flex-center">
        <div class="row no-wrap q-pa-md q-mt-xl">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      mobileData: true,
      bluetooth: false
    }
  }
}
</script>

<style scoped>

</style>
