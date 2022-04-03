<template>
 <!-- <v-row justify="center"> -->
 <v-dialog v-model="dialog" persistent max-width="600px">
  <template v-slot:activator="{ on, attrs }">
   <v-avatar color="primary" size="128" dark v-bind="attrs" v-on="on">
    <!-- <v-btn color="primary"> -->
    <v-icon x-large color="white"> mdi-home-plus </v-icon>
    <!-- </v-btn> -->
   </v-avatar>
  </template>
  <v-card>
   <v-card-title>
    <span class="text-h5">新しいルーム</span>
   </v-card-title>
   <v-card-text>
    <v-container>
     <v-row>
      <v-col cols="12">
       <v-text-field
        v-model="name"
        label="ルーム名を入力してください"
        required
       ></v-text-field>
      </v-col>
      <v-col cols="12">
       <v-file-input
        v-model="file"
        label="ルームアイコンを選択してください"
        truncate-length="15"
        accept="image/*"
       ></v-file-input>
      </v-col>
     </v-row>
    </v-container>
   </v-card-text>
   <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn color="success darken-1" @click="onSubmit">
     <v-icon left> mdi-check-bold </v-icon>作成
    </v-btn>
    <v-btn color="blue darken-1" text @click="dialog = false"> 閉じる </v-btn>
   </v-card-actions>
  </v-card>
 </v-dialog>
 <!-- </v-row> -->
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
 data: () => ({
  dialog: false,
  name: "",
  file: null,
 }),
 methods: {
  async onSubmit() {
   let thumbnailUrl = "";
   if (this.file) {
    const filePath = `/room/${this.file.name}`;
    await firebase
     .storage()
     .ref()
     .child(filePath)
     .put(this.file)
     .then(async (snapshot) => {
      thumbnailUrl = await snapshot.ref.getDownloadURL();
      console.log("thumbnailUrl", thumbnailUrl);
     });
   }

   const roomRef = firebase.firestore().collection("rooms");
   await roomRef
    .add({
     name: this.name,
     thumbnailUrl: thumbnailUrl,
     createdAt: firebase.firestore.Timestamp.now(),
    })
    .then((result) => {
     console.log("success to create room", result);
     this.$router.go({ path: "/", force: true });
     this.dialog = false;
    });
  },
 },
};
</script>

<style>
.newroom-icon {
 display: block !important;
}
</style>
