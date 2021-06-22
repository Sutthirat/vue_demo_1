<template>
  <div id="demo9">
    <ul>
      <li v-for="(item, index) in ['Angular', 'Vue', 'React']" :key="index">{{item}}</li>
    </ul>

    <hr>

    <ul>
      <li v-for="(item, index) in mCourses" :key="index">{{item.title}}, Price {{item.price}}</li>
    </ul>

    <hr>

    <!--Destructuring-->
    <ul>
      <li v-for="({title, price}, index) in mCourses" :key="index">{{title}}, Price {{price}}</li>
    </ul>

    <hr>

    <input type="text" placeholder="Course title" v-model="course.title"><br>
    <input type="number" placeholder="Course price" v-model="course.price"><br>
    <button @click="addCourse">Submit</button>

    <ul>
      <li v-for="(course, index) in dynamicCourses" :key="index">
        {{course.title}}, Price {{course.price}} <button @click="removeCourse(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo9",
  data() {
    return {
      course: {title: "", price: 0},
      mCourses: [
        { title: "iOS", price: 11 },
        { title: "Android", price: 13 },
        { title: "Flutter", price: 15 },
      ],
      dynamicCourses: []
    }
  },
  methods: {
    addCourse() {
      this.dynamicCourses.push(this.course)
      this.course = {title: "", price: 0}
    },
    removeCourse(index) {
      this.dynamicCourses.splice(index, 1)
    }
  }
};
</script>

<style scoped>

</style>