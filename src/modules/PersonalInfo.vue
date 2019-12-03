<template>
  <div id="container">
    <div>
      <center>
        <h1>Profile</h1>
        <hr />
      </center>
    </div>
    <div class="mt-4">
      <b-container fluid class>
        <b-row>
          <b-col cols="4">
            <b-img
              thumbnail
              flui
              v-b-tooltip.hover.top
              title="Change your Avatar"
              :src="imgUrl"
              alt="Image 3"
              accept="image;"
              id="userIcon"
              @click="$refs.file.click()"
            ></b-img>
            <div>
              <span>
                <input
                  type="file"
                  id="file"
                  @change="handleFileUpload()"
                  ref="file"
                  style="display:none"
                />
                <center>
                  <br />
                  <h1>Hi {{Uname}}</h1>
                  <button
                    :disabled="file.length"
                    class="btn btn-outline-primary"
                    @click="submit"
                  >Upload</button>
                </center>
              </span>
            </div>
          </b-col>
          <b-col cols="8">
           <div class="form-group">
              <label for="username" class="bmd-label-floating">Username</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="Username"
                v-model="username"
              ></b-form-input>
            </div>
            <div class="form-group">
              <label for="email" class="bmd-label-floating">Email</label>
              <b-form-input required type="email" class="form-control" id="Email" v-model="email"></b-form-input>
            </div>
            <!-- <div class="form-group">
              <label for="address" class="bmd-label-floating">Address</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="Address"
                v-model="address"
              ></b-form-input>
            </div>-->
            <div class="form-group">
              <label for="pwd" class="bmd-label-floating">Password</label>
              <b-form-input
                required
                type="password"
                class="form-control"
                id="passw"
                v-model="password"
              ></b-form-input>
            </div>
            <center>
              <button
                type="button"
                class="btn btn-outline-primary login-btn"
                id="btnLogin"
                @click="save"
              >Save changes</button>
            </center>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      imgUrl: "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
      file: "",
      username: "",
      email: "",
      password: "",
      Uname: sessionStorage.getItem("Username")
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Username", this.username),
        sessionStorage.setItem("Email", this.email),
        sessionStorage.setItem("Password", this.password),
        // AUTH.save(this.username, this.email, this.password);
        (this.username = ""),
        (this.email = ""),
        (this.password = "");
    },
    addImage() {
      $("#images")[0].click();
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.imgUrl = URL.createObjectURL(this.file);
    },

    submit() {
      /*
                Initialize the form data
            */
      let formData = new FormData();
       formData.append('img', this.file)
      //  formData.append('username', this.username)
      //  formData.append('email', this.email)
      //  formData.append('password', this.password)

      /*
                Add the form data we need to submit
            */
      /*
          Make the request to the POST /single-file URL
        */
      axios
        .post("http://localhost:3000/uploadSingle", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);

          this.imgUrl = res.data.filename;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
#container {
  margin-left: 40px;
  margin-right: 40px;
}
.card {
  background-color: transparent;
  border: 2px solid;
}
#userIcon {
  width: 80%;
  height: 60%;
  margin-left: 60px;
  margin-top: 10px;
}
.mt-4 {
  border: solid green 1px;
}
.img-thumbnail {
  border: solid green 1px;
}
.form-control {
  border: solid green 1px;
}
.btn-outline-primary {
  color: #22e932;
  border: solid green 1px;
}
hr {
  border: solid green 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
