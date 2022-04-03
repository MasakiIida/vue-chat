<template>
 <v-app id="inspire">
  <v-app-bar app elevate-on-scroll>
   <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
   <v-toolbar-title class="room-title d-flex">
    <h2>{{ room ? room.name : "" }}</h2>
    <DeleteRoom />
    <!-- <v-btn color="error" fab small right absolute @click="deleteRoom"
     ><v-icon @click="deleteRoom">mdi-trash-can</v-icon></v-btn
    > -->
   </v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app light>
   <SideBar />
  </v-navigation-drawer>
  <v-main>
   <v-container class="py-8 px-6" fluid>
    <v-row>
     <v-col v-for="card in cards" :key="card" cols="12">
      <v-card>
       <v-subheader>{{ card }}</v-subheader>

       <v-list two-line>
        <template v-for="(data, index) in messages">
         <v-list-item :key="index">
          <div>
           <v-list-item-avatar color="grey darken-1">
            <v-img :src="data.photoURL"></v-img>
           </v-list-item-avatar>
           {{ data.name }}
          </div>

          <v-list-item-content>
           <v-list-item-subtitle class="message">
            {{ data.message }}
           </v-list-item-subtitle>
          </v-list-item-content>
         </v-list-item>

         <v-divider v-if="n !== 6" :key="`divider-${index}`" inset></v-divider>
        </template>
       </v-list>
      </v-card>
     </v-col>
    </v-row>
   </v-container>

   <!-- <v-btn @click="clear"> クリア </v-btn> -->
  </v-main>
  <v-card>
   <v-bottom-navigation
    class="d-flex align-center"
    hide-on-scroll
    horizontal
    fixed
   >
    <v-textarea
     v-model="body"
     prepend-inner-icon="mdi-comment"
     rows="1"
     auto-lgrow
     label="メッセージを入力"
    ></v-textarea>
    <v-btn icon type="submit" :disabled="invalid" @click="submit">
     <v-icon color="blue">mdi-send</v-icon>
    </v-btn>
   </v-bottom-navigation>
  </v-card>
 </v-app>
</template>

<script>
import firebase from "@/firebase/firebase";
import SideBar from "@/components/layouts/SideBar";
import DeleteRoom from "@/components/modal/DeleteRoom";

export default {
 components: {
  SideBar,
  DeleteRoom,
 },
 async created() {
  this.roomId = this.$route.query.room_id;
  console.log("roomId", this.roomId);

  const roomRef = firebase.firestore().collection("rooms").doc(this.roomId);
  const roomDoc = await roomRef.get();
  if (!roomDoc.exists) {
   await this.$router.push("/");
  }
  this.room = roomDoc.data();
  console.log("room", this.room);
 },
 mounted() {
  this.auth = JSON.parse(sessionStorage.getItem("user"));
  console.log(this.auth);

  const roomRef = firebase.firestore().collection("rooms").doc(this.roomId);
  roomRef
   .collection("messages")
   .orderBy("createdAt", "asc")
   .onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
     console.log("new message", change.doc.data());
     this.messages.push(change.doc.data());
    });
   });
 },
 data: () => ({
  messages: [],
  name: "",
  body: "",
  roomId: "",
  room: null,
  cards: ["トーク"],
  drawer: null,
  n: "",
  auth: null,
 }),
 computed: {
  invalid() {
   if (!this.body) {
    return true;
   }
   return false;
  },
 },
 methods: {
  clear() {
   this.body = "";
  },
  submit() {
   const roomRef = firebase.firestore().collection("rooms").doc(this.roomId);
   roomRef
    .collection("messages")
    .add({
     message: this.body,
     name: this.auth.displayName,
     photoURL: this.auth.photoURL,
     createdAt: firebase.firestore.Timestamp.now(),
    })
    .then((result) => {
     console.log("success", result);
     this.body = "";
    })
    .catch((error) => {
     console.log("fail", error);
     alert("メッセージの送信に失敗しました");
    });
  },

  // deleteRoom() {
  //  const room_id = this.$route.query.room_id;
  //  firebase
  //   .firestore()
  //   .collection("rooms")
  //   .doc(room_id)
  //   .delete()
  //   .then(() => {
  //    this.$router.push("/");
  //    console.log(room_id, "は削除されました");
  //   });
  // },
 },
};
</script>

<style lang="scss">
@media screen and (max-width: 600px) {
 .v-main {
  padding-top: 10px !important;
 }
}

.message {
 text-align: left;
 word-break: break-all;
 white-space: pre-wrap;
}

.room-title {
 overflow: visible !important;
}

.v-text-field__details {
 display: none;
}
</style>
