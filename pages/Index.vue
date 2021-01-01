<template>
  <q-page class="flex flex-center">
    <div class="row q-gutter-xl">
       <q-btn to="/Students" outline rounded color="green" label="Students" />
       <q-btn to="/Subjects" outline rounded color="green" label="Subjects" />
       <q-btn to="/Classrooms" rounded color="green" label="Class Rooms" />
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
