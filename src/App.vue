<template>
  <div id="app">
      <div class="bg">
        <div class="container">
          <div class="sidebar">
   <div id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li>
                    <router-link to="/unos">Unos pacijenata</router-link>
                </li>
                <li>
                    <router-link to="/pcekanje">Pacijenti na čekanju</router-link>
                </li>
                <li>
                    <router-link to="/puobr">Pacijenti u obradi</router-link>
                </li>
                <li>
                    <router-link to="/pobr">Obrađeni pacijenti</router-link>
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
    <!-- /#wrapper -->



</div>
          <div class="row">
            <div class="col">
              <nav class="navbar navbar-expand-lg navbar-light mb-2">
                <router-link class="navbar-brand" :to="{name: 'posts'}">
                  <img id="r" src="/images/logo.png" style=" widht: 10px; height: 35px;"/>            
                <a id="nasl"> <b> AHBP </b></a>              
              </router-link>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>           
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0 mr-auto ml-5">
                 
                </form>
                <router-link v-if="!authenticated" id="bodj" class="btn btn-outline my-2 my-sm-0 mr-2" to="/prijava">Prijava</router-link>
                <span v-if="authenticated">
                  {{ userEmail }}
                  <a @click="logout" id="odj" class="btn btn-outline my-2 my-sm-0 mr-2" href="#">Odjava</a>
                </span>
                <router-link v-if="!authenticated" id="bodj" class="btn btn-outline my-2 my-sm-0 mr-2" to="/registracija">Registracija</router-link>
            </div>
          </nav>
        </div>
      </div>
      <div class="raz">

      </div>

    </div>
    </div>

      <div class="mc">
       
      

        <router-view/>

    </div>

  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'

export default {
  data () {
    return store;
  },

  methods: {
    logout() {
      firebase.auth().signOut()
    }
  },

  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User is logged in with email " + user.email)
        this.authenticated = true

         firebase.firestore().collection("zaposlenici")
          .doc(user.email)
          .get()
          .then(doc => {
              if (doc.exists) {
                this.zaposlenik=doc.data().zaposlenik
                this.ime=doc.data().ime
                this.prezime=doc.data().prezime
                console.log("Document data:", doc.data());
                this.tipKorisnika = doc.data().tipProfila;
              } else {
                console.log("No such document!");
              }
          });
        this.userEmail = user.email
        if (this.$route.name === 'login')
          this.$router.push({name: 'home'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'login')
          this.$router.push({name: 'login'}).catch(err => console.log(err))
      }
    });
  }
}
</script>

<style lang="scss">

#r{
margin-bottom: 5%;
}

#bodj {
color: white;
}

#odj {
color: white;
}

.mc{
padding-left: 18%;
}

#nasl {
margin-bottom: 10%;
color: white;
font-size: 30px;
}

body {
  background-color: rgba(var(--b3f,250,250,250),1)
}

.bg {
  background-color: rgb(255, 0, 0);
  border-bottom: rgb(255, 0, 0) 1px solid;
  margin-bottom: 20px;
  padding: 10px;
}

nav.navbar {
  background-color: rgb(255, 0, 0);

  a {
    svg {
      border-right: #aaa 1px solid;
      margin-right: 10px;
      padding-right: 10px;
    }

    img {
      position: relative;
      top: 3px;
    }
  }
}


#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 250px;
}

#sidebar-wrapper {
  margin-top:0.5%;
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: rgb(255, 255, 255);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    border-right: 2px;
    border-color: rgb(255, 0, 0);
}

#wrapper.toggled #sidebar-wrapper {
    width: 250px;
}

#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
    position: absolute;
    width: 170px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #000;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: rgb(255, 0, 0);
    background: rgba(255,255,255,0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}

@media(min-width:768px) {
    #wrapper {
        padding-left: 250px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
      position: absolute;
      top:13%;
        width: 170px;
        border-top: rgb(255, 0, 0) 1px solid;
        border-right: rgb(255, 0, 0) 1px solid;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 0;
    }

    #page-content-wrapper {
        padding: 20px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}

</style>
