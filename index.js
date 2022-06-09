var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    status: "",
    email: "",
    password: "",
    isLoggedIn: false,
    user: null,
  },
  methods: {
    login() {
      let { email, password } = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          console.error("error", err);
        });
    },
    logout() {
      firebase.auth().signOut();
    },
  },
  beforeMount() {
    firebase.initializeApp({
      apiKey: "get It From firebase app ",
      authDomain: "auth-test-763e7.firebaseapp.com",
      projectId: "auth-test-763e7",
      storageBucket: "auth-test-763e7.appspot.com",
      messagingSenderId: "537780381754",
      appId: "1:537780381754:web:b36f302c8b87ce491b2d03",
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.user = user;
        this.isLoggedIn = true;
      } else {
        this.user = null;
        this.isLoggedIn = false;
      }
    });
  },
});
