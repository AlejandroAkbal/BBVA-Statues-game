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

    <NuxtLink
      class="focus:focus-util hover:bg-dark-200 flex flex-col gap-2 rounded-md p-2 text-white"
      to="/ranking"
    >
      <div class="i-carbon-star text-indigo mx-auto h-10 w-10" />
      Player ranking
    </NuxtLink>

    <form
      class="grid place-items-center gap-10"
      @submit.prevent="onFormSubmit"
    >
      <!-- Name input -->
      <div class="space-y-2">
        <label
          class="block text-lg font-medium text-gray-200"
          for="player-name"
        >
          Name
        </label>

        <input
          id="player-name"
          ref="playerNameElement"
          aria-describedby="player-name-help-text"
          class="focus:focus-util block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          name="player-name"
          pattern="[A-Za-z0-9]+"
          required
          type="text"
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
        class="focus:focus-util block w-full rounded-md bg-indigo-600 py-1.5 text-lg font-medium text-white hover:bg-indigo-700 focus:ring-offset-2"
        type="submit"
      >
        Play
      </button>
    </form>

    <!-- GitHub link -->
  </div>
</template>
