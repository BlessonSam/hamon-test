<template>
  <q-page>
     <q-card  class="q-mx-auto q-mt-xl" style="max-width:600px; border-radius:20px">
       <q-spinner v-if="loading" class="absolute-center" color="green" size="3em" />
    <q-markup-table v-else>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-center">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="classroom in classrooms" :key="classroom.id">
          <td class="text-left">{{ classroom.id }}</td>
          <td class="text-center">{{ classroom.name }}</td>
          <td class="text-center">
            <q-btn :to="{ name: 'classroom', params: { id: classroom.id } }" rounded outline no-caps color="green" label="View" class="text-bold"/>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
   </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ClassroomList',
  data () {
    return {
      classrooms: [],
      loading: true
    }
  },

  created () {
    this.$axios.get('https://hamon-interviewapi.herokuapp.com/classrooms/?api_key=AdB12').then((response) => {
      this.classrooms = response.data.classrooms
      this.loading = false
    })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
