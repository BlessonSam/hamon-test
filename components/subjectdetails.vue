<template>
    <q-spinner v-if="loading" class="absolute-center" color="green" size="3em" />
      <q-card v-else class="q-mx-auto q-mt-xl q-pa-xl" style="max-width:600px; border-radius:5px">
        <p class="text-subtitle2">Subject Id: {{result.id}}</p>
        <h2 class="text-bold">{{result.name}}</h2>
       <h5>Teacher: {{result.teacher}}</h5>
       <h6>Credits: {{result.credits}}</h6>
    </q-card>
</template>

<script>
export default {
  name: 'subjectdetails',
  props: {
    id: String
  },
  data () {
    return {
      loading: true,
      result: []
    }
  },
  created () {
    this.$axios.get('https://hamon-interviewapi.herokuapp.com//subjects/' + this.id + '?api_key=AdB12').then((response) => {
      this.result = response.data
      this.loading = false
    })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
