<template>
 <v-app id="inspire">
  <v-app-bar app>
   <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
   <v-toolbar-title>ルーム</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app light>
   <SideBar />
  </v-navigation-drawer>
  <v-main>
   <v-container>
    <v-row>
     <v-col cols="6" sm="4">
      <CreateRoom />
     </v-col>
     <v-col v-for="room in rooms" :key="room.id" cols="6" sm="4">
      <router-link
       class="room-name"
       :to="{ path: '/chat', query: { room_id: room.id } }"
      >
       <v-avatar color="grey lighten-2" size="128">
        <v-icon x-large v-if="!room.thumbnailUrl"> mdi-home </v-icon>
        <!-- <img
         src="https://cdn.vuetifyjs.com/images/john.jpg"
         v-if="!room.thumbnailUrl"
        /> -->
        <img :src="room.thumbnailUrl" v-if="room.thumbnailUrl" />
       </v-avatar>
       <h2 class="room-name">{{ room ? room.name : "" }}</h2>
      </router-link>
     </v-col>
    </v-row>
   </v-container>
  </v-main>
 </v-app>
</template>

<script>
import firebase from "@/firebase/firebase";
import SideBar from "@/components/layouts/SideBar";
import CreateRoom from "@/components/modal/CreateRoom";
export default {
 components: {
  SideBar,
  CreateRoom,
 },
 data: () => ({
  rooms: [],
  drawer: null,
  roomId: [],
 }),
 mounted() {
  this.getRooms();
 },
 methods: {
  async getRooms() {
   this.rooms = [];
   const roomRef = firebase.firestore().collection("rooms");
   const snapshot = await roomRef.get();
   console.log("snapshot", snapshot);

   snapshot.docs.map((doc) => {
    const data = { ...doc.data() };
    data.id = doc.id;
    console.log(data);
    this.rooms.push(data);
   });
   console.log(this.rooms);
  },
  created() {
   firebase
    .firestore()
    .collection("rooms")
    .orderBy("createdAt", "asc")
    .get()
    .then((snapshot) => {
     snapshot.forEach((doc) => {
      this.roomId.push({ ...doc.data(), id: doc.id });
     });
    });
  },
 },
};
</script>

<style>
.room-name {
 color: #333;
 text-decoration: none;
}
</style>
