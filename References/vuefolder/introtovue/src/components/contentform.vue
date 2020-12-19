<template>
  <div>
      <h2>Add Content</h2>
      <form action="">
          <label for="title">Title:</label>
          <input type="text" name="" id="title" v-model.lazy="title" required="required"/>
          <label for="content">Content:</label>
          <input type="text" name="" id="content" v-model="content" required="required"/>
      </form>
      <div id="preview">
          <h3>Preview</h3>
          <p>Title: {{title}}</p>
          <p>Content: {{content}}</p>
          <button v-on:click="grabData">Click Here</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: '',
            content: '',
        };
    },
    methods: {
        grabData: function() {
            // const url = "https://jsonplaceholder.typicode.com/users"

            const url = "http://localhost:3000/accounts/users"
            // axios.get(url).then(response => this.title = response.data);
            axios({
                method: 'POST',
                url: url,
                data: {
                    firstName: "Ean",
                    lastName: "Velayo",
                }
            }).then(
                response => this.title = response.data
            ).catch( e => console.log(e));
        }
    }
}
</script>

<style>

</style>