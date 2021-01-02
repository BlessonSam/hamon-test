<template>
  <q-page>
     <q-card class="q-mx-auto q-mt-xl" style="max-width:300px; border-radius:20px">
       <div class="full-width justify-center row"><h5 class="text-bold">Subject List</h5></div>
       <q-spinner v-if="loading" class="absolute-center" color="green" size="3em" />
    <q-markup-table v-else>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-center">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="subject in subjects" :key="subject.id">
          <td class="text-left">{{ subject.id }}</td>
          <td class="text-center">{{ subject.name }}</td>
          <td class="text-center">
            <q-btn type="submit" @click="subjectView(subject.id)" rounded outline no-caps color="green" label="View" class="text-bold"/>
            </td>
        </tr>
      </tbody>
    </q-markup-table>
   </q-card>

   <q-dialog v-model="subjectDetail">
    <subjectdetails :id='subjectId' />
   </q-dialog>

  </q-page>
</template>

<script>

import subjectdetails from 'components/subjectdetails.vue'

export default {
  name: 'SubjectList',
  components: { subjectdetails },
  data () {
    return {
      subjects: [],
      loading: true,
      subjectId: 0,
      subjectDetail: false
    }
  },

  methods: {
    subjectView (subjectId) {
      this.subjectId = subjectId
      this.subjectDetail = true
    }
  },

  created () {
    this.$axios.get('https://hamon-interviewapi.herokuapp.com/subjects/?api_key=AdB12').then((response) => {
      this.subjects = response.data.subjects
      this.loading = false
    })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
