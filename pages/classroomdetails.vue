<template>
    <q-page>
      <q-spinner v-if="loading" class="absolute-center" color="green" size="3em" />
      <q-card v-else class="q-mx-auto q-my-xl q-pa-xl" style="max-width:600px; border-radius:5px">
       <p class="text-subtitle2">Classroom Id: {{classDetails.id}}</p>
       <h2 class="text-bold">{{classDetails.name}}</h2>
       <h5>Layout: {{classDetails.layout}}</h5>
       <h6>Size: {{classDetails.size}}</h6>
       <p class="text-body1 q-mb-xl">Subjects: {{classDetails.subject}}<span v-if="!classDetails.subject">No Subjects Assigned </span></p>

      <p class="text-subtitle1"><u>Assign/Reassign Subject</u></p>
       <q-select
        ref="subjectadd"
        outlined
        v-model="addsubject"
        :options="subjects"
        option-value="id"
        option-label="name"
        label="Select a subject"
        style="width: 250px"
      />
      <q-btn class="q-mt-sm q-mb-xl" :loading='loading1' color="green" label="Assign" @click="addSubjects" no-caps />

      <q-card class="q-mt-xl">
        <AddRemoveStudents :classId="id" :classSubject="classDetails.subject" />
      </q-card>

      </q-card>

     <q-dialog v-model="error">
         <q-card class="q-pa-xl text-red">{{errormsg}}</q-card>
      </q-dialog>

    </q-page>
</template>

<script>

import AddRemoveStudents from 'components/AddRemoveStudents.vue'

export default {
  name: 'classroomdetails',
  components: { AddRemoveStudents },
  data () {
    return {
      id: 0,
      loading: true,
      loading1: false,
      loading2: false,
      classDetails: [],
      subjects: [],
      dialog: false,
      addsubject: null,
      error: false,
      errormsg: ''
    }
  },

  methods: {

    addSubjects () {
      this.loading1 = true
      this.$axios.patch(
        'https://hamon-interviewapi.herokuapp.com/classrooms/' + this.id + '?api_key=AdB12',
        'subject=' + this.$refs.subjectadd.value.id
      )
        .then((response) => {
          this.classDetails = response.data
          this.loading1 = false
          this.addsubject = null
          this.$q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'done',
            message: 'Subject' + this.$refs.subjectadd.value.id + ' is assigned for this classroom'
          })
        })
        .catch((error) => {
          console.error(error)
          this.errormsg = error
          this.loading1 = false
          this.error = true
        })
    }
  },

  created () {
    this.id = this.$route.params.id
    this.$axios.get('https://hamon-interviewapi.herokuapp.com/classrooms/' + this.id + '?api_key=AdB12').then((response) => {
      this.classDetails = response.data
      this.loading = false
    })
      .catch((error) => {
        console.error(error)
      })

    this.$axios.get('https://hamon-interviewapi.herokuapp.com/subjects?api_key=AdB12').then((response) => {
      this.subjects = response.data.subjects
    })
      .catch((error) => {
        console.error(error)
      })
  }

}
</script>
