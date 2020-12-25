
<template>
  <div class="d-flex flex-row-reverse">
    <div class="col-md-5" v-on:click="toggleModal()">
      <div
        class="border-radius-button"
        data-toggle="modal"
        data-target="#modalLarge"
      >
        <a href="#">Create Announcements</a>
      </div>
    </div>
    <div
      class="modal fade modal-fullscreen"
      id="modalLarge"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLargeLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="modalLargeLabel">
              Create Announcement
            </h4>
          </div>
          <div class="modal-body">
            <div class="form">
              <form class="" v-on:submit.prevent>
                <input type="file">
                <input
                  v-model="title"
                  required
                  type="text"
                  placeholder="Insert title here"
                  maxlength="60"
                />
                <textarea
                  v-model="description"
                  required
                  class="form-control mb-3"
                  placeholder="Event description"
                  rows="5"
                  maxlength="200"
                />
                <p class="text-left">Start Time</p>
                <input 
                  v-model="starttime"
                  required
                  class="form-control"
                  type="datetime-local"
                />
                <p class="text-left">End Time</p>
                <input 
                  v-model="endtime"
                  required
                  class="form-control"
                  type="datetime-local"
                />
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-default btn-primary"
                    data-glyphicon="glyphicon-ok"
                    v-bind:data-dismiss="modalShow ? 'false' : 'modal'"
                    v-on:click="createAnnouncement()"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      modalShow: true,
      title: "",
      description: "",
      starttime: "",
      endtime: ""
    };
  },
  methods: {
    toggleModal: function () {
      this.modalShow = true;
    },

    createAnnouncement: function () {
      if (
        this.title != "" &&
        this.description != "" &&
        this.starttime != "" &&
        this.endtime != ""
      ) {
        //Update db data with this data
        let body = {
          title: this.title,
          description: this.description,
          starttime: this.starttime,
          endtime: this.endtime
        };

        const url = "http://localhost:3000/write/announcement";
        axios
          .post(url, body)
          .then((res) => {
            if (res.data) {
              console.log("Announcement created");
              this.title = '';
              this.description = '';
              this.starttime = '';
              this.endttime = '';
              this.$emit("createAnnouncement");
            } else {
              console.log("Announcement Creation Error.");
            }
          })
          .catch((e) => console.log(e));
        this.modalShow = false;
      }
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 20px 50px 0px 50px;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
</style>