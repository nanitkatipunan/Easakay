<template>
  <div>
    <div class="jumbotron">
      <h1>Subjects</h1>
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
                    <th scope="col">SUBJECT</th>
                    <th scope="col">TEACHER</th>
                    <th scope="col">TIME</th>
                    <th scope="col">DAY</th>
                    <th scope="col">VENUE</th>
                  
                  </tr>
                </thead>
                <tbody v-for="(item, index) in this.rows" :key="index">
                  <tr>
                    <td>{{ item.subject }}</td>
                    <td>{{ item.teacher }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.day }}</td>
                    <td>{{ item.room }}</td>
                    
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
                <label id="Subject">Subject:</label>
                <b-form-input v-model="content.subject" id="subject" size="sm"></b-form-input>
                <label id="teacher">Teacher:</label>
                <b-form-input v-model="content.teacher" id="teacher" size="sm"></b-form-input>
                <label id="time">Time:</label>
                <b-form-input v-model="content.time" id="time" size="sm"></b-form-input>
                <label id="time">Day:</label>
                <b-form-input v-model="content.day" id="day" size="sm"></b-form-input>
                <label id="room">Venue:</label>
                <b-form-input v-model="content.room" id="room" size="sm"></b-form-input>
                <br>
                <br>
                
                <b-button variant="primary" @click="addItem">Add Subject</b-button>
                <b-button variant="primary" @click="remove">Remove Subject</b-button>
                
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
.jumbotron{
    padding: $jumbotronpadding !important;
    text-align: $text-align !important;
    background-color:$jumbo !important;
}
</style>

<script>
export default {
  data() {
    return {
      delInfo:{
        delCourse :""
      },
      rows: [],
      content: {
        subject: "",
        teacher: "",
        time: "",
        day: "",
        room: ""
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        subject: this.content.subject,
        teacher: this.content.teacher,
        time: this.content.time,
        day: this.content.day,
        room: this.content.room
      };
      this.rows.push(object);
      this.content.subject = "";
      this.content.teacher = "";
      this.content.time = "";
      this.content.day = "";
      this.content.room = "";
    },
    remove(){
      for(let i=0;i<this.rows.length;i++){
        if(this.rows[i].subject===this.delInfo.delCourse){
          this.rows.splice(this.rows.indexOf(this.rows[i]),1)
        }
      }
      
    }
  }
};
</script>