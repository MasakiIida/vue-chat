<template>
 <v-row justify="center">
  <v-dialog v-model="dialog" max-width="290">
   <template v-slot:activator="{ on, attrs }">
    <v-btn
     class="delete-button"
     color="error"
     elevation="0"
     fab
     small
     v-bind="attrs"
     v-on="on"
     ><v-icon>mdi-trash-can</v-icon>
    </v-btn>
   </template>
   <v-card>
    <v-card-title class="text-h6">ルームを削除しますか？</v-card-title>
    <v-card-actions>
     <v-spacer></v-spacer>
     <v-btn color="" text @click="dialog = false"> キャンセル </v-btn>
     <v-btn
      color="error"
      @click="
       deleteRoom();
       dialog = false;
      "
     >
      削除
     </v-btn>
    </v-card-actions>
   </v-card>
  </v-dialog>
 </v-row>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
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
 data: () => ({
  messages: [],
  body: "",
  roomId: "",
  room: null,
  drawer: null,
  dialog: false,
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
  deleteRoom() {
   const room_id = this.$route.query.room_id;
   firebase
    .firestore()
    .collection("rooms")
    .doc(room_id)
    .delete(this.body)
    .then(() => {
     console.log(room_id, "は削除されました");
     this.$router.push("/");
    });
  },
 },
};
</script>

<style>
.delete-button {
 position: absolute;
 top: 8px;
 right: 20px;
}
</style>
