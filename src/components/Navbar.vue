<template>
    <nav>
        <v-navigation-drawer app clipped right  v-model="drawer" class="blue lighten-3" >
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar>
                        <img src="/img/guy.jpg" >
                    </v-avatar>
                    <p class="white--text subheading mt-1">Smart Guys</p>
                </v-flex>
            </v-layout>
           <v-list>
               <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                   <v-list-tile-action>
                       <v-icon class="white--text">{{link.icon}}</v-icon>
                   </v-list-tile-action>
                   <v-list-tile-content>
                       <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                   </v-list-tile-content>
               </v-list-tile>
           </v-list>
        </v-navigation-drawer>
        <v-toolbar  dark color="blue lighten-3" >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn depressed flat color="pink">Link One</v-btn>
                    <!--  -->
                        <v-menu origin="center center" transition="scale-transition" offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                    flat
                                    v-on="on"

                                    >
                                    <v-icon>expand_more</v-icon>
                                    <span>Menu</span>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-tile v-for="link in links"  :key="link.route" :to="link.route">
                                        <v-list-tile-title>{{link.text}}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                        </v-menu>
                    <!--  -->
                    <v-btn flat>Link Two</v-btn>
                    <v-btn flat>Link Three</v-btn>
                </v-toolbar-items>
        </v-toolbar>
        
    </nav>
</template>

<script>
    export default {
        name:'Navbar',
        data(){
            return {

                drawer: false,
                links: [
                    {icon:'dashboard',text:'dashboard',route:'/'},
                    {icon:'folder',text:'Project',route:'/projects'},
                    {icon:'person',text:'Team',route:'/team'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>