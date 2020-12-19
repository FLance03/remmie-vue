
<template>
  <div class="d-flex flex-row-reverse">
    <div class="col-md-5">
      <div
        class="border-radius-button"
        data-toggle="modal"
        data-target="#modalLarge"
      >
        <a href="#">Create Staff Account</a>
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
              Create Staff Account
            </h4>
          </div>
          <div class="modal-body">
            <div class="form">
              <form class="">
                <input
                  v-model="fname"
                  required
                  type="text"
                  placeholder="first name"
                />
                <input
                  v-model="lname"
                  required
                  type="text"
                  placeholder="last name"
                />
                <input
                  v-model="email"
                  required
                  type="email"
                  placeholder="email address"
                />
                <input
                  v-model="pass"
                  required
                  type="password"
                  placeholder="password"
                />
                <input
                  v-model="cpass"
                  required
                  type="password"
                  placeholder="confirm password"
                />
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-default btn-primary"
              data-glyphicon="glyphicon-ok"
              v-bind:data-dismiss="modalShow ? 'false' : 'modal'"
              v-on:click="createStaff()"
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
export default {
  data() {
    return {
      modalShow: true,
      fname: "",
      lname: "",
      email: "",
      pass: "",
      cpass: "",
    };
  },
  methods: {
    createStaff: function () {
      console.log("Staff Account Created");
      console.log(this.fname);
      console.log(this.lname);
      console.log(this.email);
      console.log(this.pass);
      console.log(this.cpass);

      if (this.fname!='' && this.lname!='' && this.email!='' && this.pass!='' && this.cpass!='' && this.pass==this.cpass){
        this.modalShow = false;
      }
      //Inserts inputted data into db - Daniel
      // const url = "http://localhost:3000/write/createstaff";

      // axios.get(url).then((response) => {
      //   var i,count;
      //   for (count=0,i=0 ; i<response.data.length ; i++,count++){
      //     this.wholeData.push([]);
      //     this.wholeData[count].push(response.data[i]['userName']);
      //     this.wholeData[count].push(response.data[i]['dateBooked']);
      //     this.wholeData[count].push(response.data[i]['status']);
      //   }
      //   this.updateInfo()
      // }).catch( e => console.log(e));
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