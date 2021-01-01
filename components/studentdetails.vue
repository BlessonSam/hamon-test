<template>
    <q-spinner v-if="loading" class="absolute-center" color="green" size="3em" />
      <q-card v-else class="q-mx-auto q-mt-xl q-pa-xl" style="max-width:600px; border-radius:5px">
       <p class="text-subtitle2">Student Id: {{studentdets.id}}</p>
       <h2 class="text-bold">{{studentdets.name}}</h2>
       <h5>Email: {{studentdets.email}}</h5>
       <h6>Age: {{studentdets.age}}</h6>
    </q-card>
</template>

<script>
export default {
  name: 'studentdetails',
  props: {
    id: String
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.$axios.get('https://hamon-interviewapi.herokuapp.com//students/' + this.id + '?api_key=AdB12').then((response) => {
      this.studentdets = response.data
      this.loading = false
    })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
