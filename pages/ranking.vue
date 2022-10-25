<script setup>
const gameData = JSON.parse(localStorage.getItem('game-data')) ?? {
  players: {}
}

const players =
  Object.keys(gameData.players)
    .map((playerName) => ({
      name: playerName,
      highScore: gameData.players[playerName].score
    }))
    .sort((a, b) => b.highScore - a.highScore) ?? []
</script>

<template>
  <div class="flex h-full flex-col">
    <h1
      id="player-table-description"
      class="mt-4 text-center text-2xl font-semibold text-white"
    >
      Player ranking
    </h1>

    <!-- Exit button -->
    <NuxtLink
      class="focus:focus-util hover:bg-dark-200 mx-auto mt-4 rounded-md p-2"
      to="/"
    >
      <div class="i-carbon-logout h-6 w-6 text-white" />
    </NuxtLink>

    <!--  Table -->
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table
                aria-describedby="player-table-description"
                class="min-w-full divide-y divide-gray-600"
              >
                <thead class="bg-dark-700">
                  <tr>
                    <th
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6"
                      scope="col"
                    >
                      Player
                    </th>
                    <th
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                      scope="col"
                    >
                      High Score
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-dark-900 divide-y divide-gray-700">
                  <tr
                    v-for="player in players"
                    :key="player.name"
                  >
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">
                      {{ player.name }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{{ player.highScore }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    -->
  </div>
</template>
