<template>
 <v-app>
  <div class="login-wrap">
   <v-card class="login-form">
    <v-card-title class="login-title">Sign Up</v-card-title>
    <v-card-subtitle>ユーザー情報をご入力ください。</v-card-subtitle>
    <v-btn text color="light-blue" to="login">ログインはこちら</v-btn>
    <v-form ref="form" v-model="valid" lazy-validation>
     <v-text-field
      v-model="name"
      :rules="nameRules"
      label="User name"
      required
     ></v-text-field>

     <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
     ></v-text-field>

     <v-text-field
      v-model="password"
      :rules="passwordRules"
      type="password"
      label="Password"
      required
     ></v-text-field>

     <v-btn
      color="success"
      class="login-btn"
      @click="submit"
      :disabled="isValid"
      >サインアップ</v-btn
     >
     <!-- <v-btn>Clear</v-btn> -->

     <v-alert
      dense
      outlined
      type="error"
      class="error-message"
      v-if="errorMessage"
     >
      <strong>{{ errorMessage }}</strong>
     </v-alert>
    </v-form>
   </v-card>
  </div>
 </v-app>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
 data: () => ({
  valid: true,
  name: "",
  nameRules: [
   (v) => !!v || "ユーザー名を入力してください",
   (v) => (v && v.length <= 10) || "ユーザー名は10文字以内で入力してください",
  ],
  email: "",
  emailRules: [
   (v) => !!v || "メールアドレスを入力してください",
   (v) => /.+@.+\..+/.test(v) || "メールアドレスが不正です",
  ],
  password: "",
  passwordRules: [
   (v) => !!v || "パスワードを入力してください",
   (v) => (v && v.length >= 6) || "パスワードは6文字以上で入力してください",
  ],
  errorMessage: "",
 }),
 computed: {
  isValid() {
   return !this.valid;
  },
 },
 methods: {
  validate() {
   this.$refs.form.validate();
  },
  reset() {
   this.$refs.form.reset();
  },
  resetValidation() {
   this.$refs.form.resetValidation();
  },
  submit() {
   firebase
    .auth()
    .createUserWithEmailAndPassword(this.email, this.password)
    .then(async (result) => {
     console.log("success", result);
     await result.user.updateProfile({ displayName: this.name });
     console.log("update user", result.user);

     localStorage.message = "新規作成に成功しました";

     // サインアップに成功したらログインページにリダイレクト
     this.$router.push("/login");
    })
    .catch((error) => {
     console.log("success", error);
     this.errorMessage = "ユーザーの新規作成に失敗しました";
    });
  },
 },
};
</script>
