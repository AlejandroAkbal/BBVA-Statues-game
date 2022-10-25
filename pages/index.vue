<script setup>
const router = useRouter()

const playerNameElement = ref(null)

function onFormSubmit() {
  navigateTo({ path: '/game', query: { name: playerNameElement.value.value } })
}
</script>

<template>
  <div class="grid min-h-screen place-items-center">
    <!--  -->

    <div class="grid place-items-center gap-3">
      <div class="rounded-full border border-transparent bg-white p-3.5">
        <AppIcon class="h-16 w-16 text-black" />
      </div>

      <h1 class="text-2xl font-semibold text-white">Statues</h1>
    </div>

    <form
      class="grid place-items-center gap-10"
      @submit.prevent="onFormSubmit"
    >
      <!-- Name input -->
      <div class="space-y-2">
        <label
          for="player-name"
          class="block text-lg font-medium text-gray-200"
        >
          Name
        </label>

        <input
          id="player-name"
          ref="playerNameElement"
          type="text"
          name="player-name"
          pattern="[A-Za-z0-9]+"
          aria-describedby="player-name-help-text"
          required
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
        />

        <span
          id="player-name-help-text"
          class="block text-sm text-gray-400"
        >
          Only letters and numbers are allowed.
        </span>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        class="block w-full rounded-md bg-indigo-600 py-1.5 text-lg font-medium text-white hover:bg-indigo-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Play
      </button>
    </form>

    <!-- GitHub link -->
  </div>
</template>
