<template>
    <div class="team">
        <span class="headline font-weight-light">Team</span>

        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="team in teams" :key="team.name" >
                    <v-card class="text-xs-center ma-3">
                        <!-- <v-img 
                        :src="team.avatar"
                        aspect-ratio="2"
                        class="pa-5"
                        >
                        </v-img> -->
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="team.avatar" >
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{team.name}}</div>
                            <div class="text--primary">{{team.role}}</div>
                        </v-card-text>
                        <v-card-action>
                            <v-btn small>
                                <v-icon small left>message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name:'Team',
        data(){

            return{

                teams:[

                    {name:'Ibrahim olayinka',role:'Team Lead Developer',avatar:'/img/guy.jpg'},
                    {name:'Janet James',role:'Marketer and Strategist',avatar:'/img/lady.jpg'},
                    {name:'yusuf Prof',role:'Assist Team Lead Developer',avatar:'/img/mann.png'},
                    {name:'David Balogun',role:'Graphic Designer/Content Manager',avatar:'/img/roman.png'},
                    {name:'David Balogun',role:'Graphic Designer/Content Manager',avatar:'/img/roman.png'},
                    {name:'David Balogun',role:'Graphic Designer/Content Manager',avatar:'/img/roman.png'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>