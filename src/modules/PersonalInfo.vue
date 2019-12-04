<template>
  <div id="container">
    <div>
      <center>
        <h1>Profile</h1>
        <hr>
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
                  @change="encodeToBase64"
                  ref="file"
                  accept="file/*"
                  style="display:none"
                >
                <!-- <center>
                  <br />
                   <h1>Hi {{Uname}}</h1>
                  <button :disabled="file.length" class="btn btn-outline-primary" @click="submit">Upload</button>
                </center>-->
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
            <br>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <br>
    <br>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      imgUrl:
        "https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
      file: "",
      username: "",
      email: "",
      password: "",
      Uname: sessionStorage.getItem("Username"),
      imageDetail: null
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
      let data = {
        username: this.username,
        password: this.password,
        email: this.email,
        image: this.imgUrl
      };
      sessionStorage.setItem("Username", this.username),
        sessionStorage.setItem("Email", this.email),
        sessionStorage.setItem("Password", this.password),

        console.log(data);
        // axios
        //   .post("http://localhost:8082/user/profile", data, {
        //     headers: {
        //       "Content-Type": "multipart/form-data"
        //     }
        //   })

 axios.post("http://localhost:8082/user/profile", {data: data})

          .then(res => {
            (this.username = ""), (this.email = ""), (this.password = "");
            console.log(res);

            this.imgUrl = res.data.filename;
          })
          .catch(err => {
            console.log(err);
          });
          
    },
    addImage() {
      $("#images")[0].click();
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      this.imgUrl = URL.createObjectURL(this.file);
    },
    encodeToBase64(event) {
      event.preventDefault();
      const file2 = event.target.files[0];
      const canvas = document.createElement("canvas");
      canvas.getContext("2d");
      const reader = new FileReader();
      reader.onload = event => {
        const img = new Image();
        img.onload = () => {
          this.image = canvas
            .toDataURL("image/png")
            .replace(/^data:image\/(png|jpg);base64,/, "");
          // console.log("RESULT/png", this.image);
        };
        img.src = event.target.result;
        // console.log("RESULT!", img.src);
        var a = document.getElementById("file").value;
        var b = a.split("\\");
        this.imageDetail = { filename: b[2], image: img.src };
        console.log(this.imageDetail);
        this.imgUrl = img.src;
      };
      reader.readAsDataURL(file2);
      var temp = document.getElementById("file").value.split("\\");
      this.file = temp[2];
      this.uploaded = true;
    }
  }
};
</script>

<style scoped>
#container {
  margin-left: 20%;
  margin-right: 20%;
}
.card {
  background-color: transparent;
  border: 2px solid;
}
#userIcon {
  width: 100%;
  height: 60%;
  margin-left: 10px;
  margin-top: 13%;
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
  color: green;
  border: solid green 1px;
}
hr {
  border: solid green 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
