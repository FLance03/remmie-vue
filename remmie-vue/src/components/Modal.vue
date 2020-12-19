<template>
  <div>
    <div class="col-md-5">
      <div
        class="filled-rounded-button"
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
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email address" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="confirm password" />
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-default btn-primary"
              data-glyphicon="glyphicon-ok"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
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