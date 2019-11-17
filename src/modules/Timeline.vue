<template>
  <div>
    <div class="jumbotron">
      <h1>Timeline</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <center>
            <b-card
              text-align
              id="card1"
              img-top
              tag="article"
              style="max-width: 40rem;"
              class="mb-2"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Topic</th>
                    <th scope="col">Message</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody v-for="(item, index) in this.rows" :key="index">
                  <tr>
                    <td>{{ item.topic }}</td>
                    <td>{{ item.message }}</td>
                    <td>{{ item.date }}</td>
                  </tr>
                </tbody>
              </table>
            </b-card>

            <b-card
              text-align
              id="card"
              img-top
              tag="article"
              style="max-width: 30rem;"
              class="mb-2"
            >
              <b-form-group label-for="input-lg">
                <label id="Subject">Topic</label>
                <b-form-input v-model="content.subject" id="subject" size="sm"></b-form-input>
                <label id="teacher">Message</label>
                <b-form-input v-model="content.teacher" id="teacher" size="sm"></b-form-input>
                <label id="time">Date</label>
                <b-form-input v-model="content.time" id="time" size="sm"></b-form-input>

                <br />

                <b-button variant="primary" @click="addItem">POST</b-button>
                <b-button variant="primary" @click="remove">REMOVE POST</b-button>

                <b-form-input v-model="delInfo.delCourse" id="room" size="sm"></b-form-input>
              </b-form-group>
            </b-card>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "assets/style.scss";
.jumbotron {
  padding: $jumbotronpadding !important;
  text-align: $text-align !important;
  background-color: $jumbo !important;
}
</style>

<script>
export default {
  data() {
    return {
      delInfo: {
        delCourse: ""
      },
      rows: [],
      content: {
        topic: "",
        message: "",
        date: ""
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        topic: this.content.subject,
        message: this.content.teacher,
        date: this.content.time
      };
      this.rows.push(object);
      this.content.topic = "";
      this.content.message = "";
      this.content.date = "";
    },
    remove() {
      for (let i = 0; i < this.rows.length; i++) {
        if (this.rows[i].topic === this.delInfo.delCourse) {
          this.rows.splice(this.rows.indexOf(this.rows[i]), 1);
        }
      }
    }
  }
};
</script>