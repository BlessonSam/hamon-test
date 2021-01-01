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
        <tr v-for="student in students" :key="student.id">
          <td class="text-left">{{ student.id }}</td>
          <td class="text-center">{{ student.name }}</td>
          <td class="text-center">
            <q-btn type="submit" @click="studentView(student.id)" rounded outline no-caps color="green" label="View" class="text-bold" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
   </q-card>

   <q-dialog v-model="studentDetail">
    <studentdetails :id='studentId' />
   </q-dialog>

  </q-page>
</template>

<script>

import studentdetails from 'components/studentdetails.vue'

export default {
  name: 'Studentlist',
  components: { studentdetails },
  data () {
    return {
      students: [],
      loading: true,
      studentId: 0,
      studentDetail: false
    }
  },

  methods: {
    studentView (studentId) {
      this.studentId = studentId
      this.studentDetail = true
    }
  },

  created () {
    this.$axios.get('https://hamon-interviewapi.herokuapp.com/students/?api_key=AdB12').then((response) => {
      this.students = response.data.students
      this.loading = false
    })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
