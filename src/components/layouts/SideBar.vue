<template>
 <div id="app">
  <v-sheet color="" class="pa-4">
   <v-avatar color="indigo">
    <input
     type="file"
     ref="fileInput"
     accept="image/jpeg, image/jpg, image/png"
     style="display: none"
     @change="updateIcon"
    />

    <v-icon dark v-if="!photoUrl" @click="changeIcon">
     mdi-account-circle
    </v-icon>
    <img :src="photoUrl" v-if="photoUrl" @click="changeIcon" />
   </v-avatar>

   <div class="username">{{ auth && auth.displayName }}</div>
  </v-sheet>

  <v-divider></v-divider>

  <v-list>
   <v-list-item v-for="[icon, text, to] in links" :key="icon" :to="to" link>
    <v-list-item-icon>
     <v-icon>{{ icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
     <v-list-item-title>{{ text }}</v-list-item-title>
    </v-list-item-content>
   </v-list-item>

   <v-list-item @click="logout">
    <v-list-item-icon>
     <v-icon> mdi-logout </v-icon>
    </v-list-item-icon>

    <v-list-item-content>
     <v-list-item-title>ログアウト</v-list-item-title>
    </v-list-item-content>
   </v-list-item>
  </v-list>
 </div>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
 mounted() {
  this.auth = JSON.parse(sessionStorage.getItem("user"));

  this.photoUrl = this.auth.photoURL;
 },
 data: () => ({
  drawer: null,
  links: [
   ["mdi-home", "ルーム", "/"],
   //  ["mdi-alert-octagon", "Spam", "/about"],
  ],
  auth: null,
  photoUrl: "",
 }),
 methods: {
  logout() {
   firebase
    .auth()
    .signOut()
    .then(() => {
     localStorage.message = "ログアウトしました";
     this.$router.push("/login");
    })
    .catch((error) => {
     console.log(error);
    });
  },
  changeIcon() {
   this.$refs.fileInput.click();
  },
  updateIcon() {
   const user = this.getAuth();
   if (!user) {
    sessionStorage.removeItem("user");
    this.$router.push("/login");
   }

   const file = this.$refs.fileInput.files[0];
   console.log(file);
   const filePath = `/user/${file.name}`;

   firebase
    .storage()
    .ref()
    .child(filePath)
    .put(file)
    .then(async (snapshot) => {
     const photoUrl = await snapshot.ref.getDownloadURL();
     console.log("download", photoUrl);

     firebase.auth().onAuthStateChanged((user) => {
      if (user) {
       user.updateProfile({
        photoURL: photoUrl,
       });

       this.auth.photoURL = photoUrl;
       sessionStorage.setItem("user", JSON.stringify(this.auth));

       this.photoUrl = photoUrl;
      }
     });
    });
  },
  getAuth() {
   return firebase.auth().onAuthStateChanged((user) => {
    return user;
   });
  },
 },
};
</script>
