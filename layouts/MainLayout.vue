<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-py-none">
      <q-toolbar class="bg-green q-pl-none q-py-md">

        <div no-wrap class="bg-white row q-pr-xl q-ml-none q-py-none items-center" style="max-height:120px; border-radius: 0px 60px 60px 0px; box-shadow: 0px 0px 50px 1px grey;  ">
          <q-btn flat no-caps no-wrap
          :to="{ name: 'home'}"
          class="q-my-none q-ml-none q-py-none float-left full-height col" >
         <img style="max-height:70px"
                  src="~assets/hamonlogo.png" alt="Hamon"
                  >
       </q-btn>

          <h5 class="text-grey-8 text-bold col-auto">Classroom Manager</h5>
        </div>
        <q-space />
        <span v-if="!$route.path.includes('/Home')" class="float-right q-gutter-md">
          <q-btn flat no-caps to="/Home" class="text-subtitle1 text-white text-bold">Home</q-btn>
          <q-btn flat no-caps to="/Classrooms" class="text-subtitle1 text-white text-bold">Classroom</q-btn>
          <q-btn flat no-caps to="/Students" class="text-subtitle1 text-white text-bold">Students</q-btn>
          <q-btn flat no-caps to="/Subjects" class="text-subtitle1 text-white text-bold">Subjects</q-btn>
        </span>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>
