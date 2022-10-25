<script setup>
import { useLocalStorage, useVibrate } from '@vueuse/core'

const route = useRoute()
const { vibrate, stop: stopVibrate } = useVibrate({ pattern: [100, 300] })

const gameData = useLocalStorage('game-data', {
  players: {},
  version: 1
})

const playerName = route.query.name

const playerData = computed(() => gameData.value.players[playerName] ?? null)

const trafficLight = ref('green')

const redLightDuration = 3000

onBeforeMount(() => {
  //

  // Check if the player name is available in the query string
  if (!playerName) {
    navigateTo({ path: '/' })
  }

  // Check if the player exists
  if (!playerData.value) {
    //

    // Add the player to the game data
    gameData.value.players[playerName] = {
      score: 0,
      highScore: 0
    }
  }
})

onMounted(() => {
  //

  startGreenRound()
})

function calculateGreenLightDuration() {
  const maxDuration = 10000
  const minDuration = 2000

  const extraMaxDuration = 1500
  const extraMinDuration = -1500

  const score = playerData.value.score

  const greenLightDuration = Math.max(maxDuration - score * 100, minDuration)

  const extraDuration = Math.floor(Math.random() * (extraMaxDuration - extraMinDuration + 1)) + extraMinDuration

  return greenLightDuration + extraDuration
}

function startGreenRound() {
  trafficLight.value = 'green'

  const greenLightDuration = calculateGreenLightDuration()
  setTimeout(startRedRound, greenLightDuration)
}

function startRedRound() {
  trafficLight.value = 'red'

  setTimeout(startGreenRound, redLightDuration)
}

// TODO: Move this to player data
const lastWalk = ref(null)

function addOneToScore() {
  gameData.value.players[playerName].score += 1

  // Check if the player has a new high score
  if (gameData.value.players[playerName].score > gameData.value.players[playerName].highScore) {
    gameData.value.players[playerName].highScore = gameData.value.players[playerName].score
  }
}

function subtractOneToScore() {
  stopVibrate()

  if (gameData.value.players[playerName].score > 0) {
    gameData.value.players[playerName].score -= 1
  }

  vibrate()
}

function resetScore() {
  vibrate(500)

  gameData.value.players[playerName].score = 0
}

function onWalkLeft() {
  if (trafficLight.value === 'red') {
    resetScore()
    return
  }

  switch (lastWalk.value) {
    case 'left':
      subtractOneToScore()
      break

    case 'right':
    default:
      addOneToScore()
      break
  }

  lastWalk.value = 'left'
}

function onWalkRight() {
  if (trafficLight.value === 'red') {
    resetScore()
    return
  }

  switch (lastWalk.value) {
    case 'right':
      subtractOneToScore()
      break

    case 'left':
    default:
      addOneToScore()
      break
  }

  lastWalk.value = 'right'
}
</script>

<template>
  <div class="flex h-full flex-col">
    <section class="flex items-center justify-around bg-gray-900 py-2">
      <!-- Player name -->
      <h1 class="text-xl font-semibold text-white">{{ playerName }}</h1>

      <!-- Exit button -->
      <NuxtLink
        class="rounded-md bg-white px-2 py-1"
        to="/"
      >
        Exit
      </NuxtLink>
    </section>

    <!-- Traffic light icon -->
    <section class="my-4 grid place-items-center">
      <div
        :class="[trafficLight === 'green' ? 'bg-green' : 'bg-red']"
        class="w-fit rounded-full p-4"
      >
        <AppIcon class="h-24 w-24 text-black" />
      </div>
    </section>

    <section>
      <!-- Player score -->
      <span class="text-lg font-semibold text-white">
        {{ playerData.score }}
        Score
      </span>

      <!-- Player high-score -->
      <span class="text-lg font-semibold text-white">
        {{ playerData.highScore }}
        High Score
      </span>
    </section>

    <section class="flex flex-auto items-center justify-center gap-6">
      <!-- Walk left button -->
      <button
        class="h-30 w-30 flex flex-col items-center justify-center rounded-full bg-white"
        type="button"
        @click="onWalkLeft"
      >
        <svg
          aria-hidden="true"
          class="h-16 w-16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 18h-5.5v1.25a2.75 2.75 0 1 0 5.5 0V18zM16 6.12c-2 0-3 2.88-3 4.88 0 1 .5 2 1 3.5l.5 1.5H20c0-1 .5-2.5.5-5s-2-4.88-4.5-4.88zM3.95 14.1l.21 1.23a2.75 2.75 0 0 0 5.42-.96l-.22-1.23-5.41.96zM5.82 1.7c-2.46.44-4.02 3.13-3.58 5.6.43 2.45 1.18 3.84 1.36 4.83L9 11.17l.24-1.56c.23-1.56.55-2.64.37-3.62-.34-1.97-1.83-4.63-3.8-4.28z"
            fill="currentColor"
          />
        </svg>

        <span>Walk left</span>
      </button>

      <!-- Walk right button -->
      <button
        class="h-30 w-30 flex flex-col items-center justify-center rounded-full bg-white"
        type="button"
        @click="onWalkRight"
      >
        <svg
          aria-hidden="true"
          class="h-16 w-16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18h5.5v1.25a2.75 2.75 0 1 1-5.5 0V18zM8 6.12c2 0 3 2.88 3 4.88 0 1-.5 2-1 3.5L9.5 16H4c0-1-.5-2.5-.5-5s2-4.88 4.5-4.88zm12.05 7.98-.21 1.23a2.75 2.75 0 0 1-5.42-.96l.22-1.23 5.41.96zM18.18 1.7c2.46.44 4.02 3.13 3.58 5.6-.43 2.45-1.19 3.84-1.36 4.83L15 11.17l-.24-1.56c-.23-1.56-.55-2.64-.37-3.62.34-1.97 1.83-4.63 3.8-4.28z"
            fill="currentColor"
          />
        </svg>

        <span>Walk right</span>
      </button>
    </section>
  </div>
</template>
