<template>
  <div>
    <h1>Emoji Mood Tracker</h1>
    <MoodSelector @addMood="addMood" />
    <MoodHistory :moods="moods" />
  </div>
</template>

<script>
import MoodSelector from '~/components/MoodSelector.vue';
import MoodHistory from '~/components/MoodHistory.vue';

export default {
  components: {
    MoodSelector,
    MoodHistory
  },
  data() {
    return {
      moods: []
    };
  },
  methods: {
    addMood(mood) {
      this.moods.unshift(mood);
    }
  }
};
</script>
