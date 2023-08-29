<template>
  <div>
    <h2>Mood History</h2>
    <ul class="mood-history">
      <li v-for="mood in moods" :key="mood.timestamp">
        {{ mood.emoji }} - {{ mood.timestamp }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    moods: Array
  }
};
</script>
