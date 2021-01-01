<template>

  <div v-if="!classSubject" class="text-subtitle2">
      Assign a subject to this class to add students.
  </div>

   <div v-else class="q-mt-xl">
       <p class="text-subtitle1 text-bold">Manage Students</p>
    <p class="text-subtitle1"><u>Add Students</u></p>
       <q-select
        ref="studentadd"
        outlined
        v-model="addstudent"
        :options="students"
        option-value="id"
        option-label="name"
        label="Select a student"
        style="width: 250px"
      />
      <q-btn class="q-mt-sm" :loading='loading3' color="green" label="Add" @click="addStudents" no-caps />

      <p class="q-mt-xl text-subtitle1"><u>Remove Students</u></p>
       <q-select
        ref="studentremove"
        outlined
        v-model="removestudent"
        :options="regs"
        option-value="id"
        option-label="student"
        label="Select a student ID"
        style="width: 250px"
      />
      <q-btn class="q-mt-sm text-red" outline :loading='loading4' label="Remove" @click="deleteStudents" no-caps />

      <q-dialog v-model="error">
         <q-card class="q-pa-xl text-red">{{errormsg}}</q-card>
      </q-dialog>
    </div>
</template>

<script>
export default {
  name: 'AddRemoveStudents',
  props: {
    classId: String,
    classSubject: String
  },
  data () {
    return {
      id: 0,
      loading3: false,
      loading4: false,
      students: [],
      regs: [],
      addstudent: null,
      removestudent: null,
      studId: 0,
      error: false,
      errormsg: ''
    }
  },
  methods: {
    addStudents () {
      this.loading3 = true
      this.$axios({
        method: 'post',
        url: 'https://hamon-interviewapi.herokuapp.com/registration/?api_key=AdB12',
        data: 'student=' + this.$refs.studentadd.value.id + '&subject=' + this.classSubject
      })
        .then((response) => {
          console.log(response)
          this.loading3 = false
          this.addstudent = null
        })
        .catch((error) => {
          console.error(error)
          this.errormsg = error
          this.loading3 = false
          this.error = true
        })
    },

    deleteStudents () {
      this.loading4 = true
      this.$axios.delete('https://hamon-interviewapi.herokuapp.com/registration/' + this.$refs.studentremove.value.id + '?api_key=AdB12')
        .then((response) => {
          console.log(response)
          this.loading4 = false
          this.removestudent = null
        })
        .catch((error) => {
          console.error(error)
          this.errormsg = error
          this.loading4 = false
          this.error = true
        })
    }
  },

  created () {
    this.$axios.get('https://hamon-interviewapi.herokuapp.com/students?api_key=AdB12').then((response) => {
      this.students = response.data.students
    })
      .catch((error) => {
        console.error(error)
      })

    this.$axios.get('https://hamon-interviewapi.herokuapp.com/registration?api_key=AdB12').then((response) => {
      this.regs = response.data.registrations
    })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
