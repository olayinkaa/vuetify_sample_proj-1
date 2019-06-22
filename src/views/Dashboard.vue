<template>
    <div>
        <v-container>
            <h1 class="subheading grey--text">Dashboard</h1>
        </v-container>

      
        <v-container class="my-5">
            
            <v-layout row class="mb-3">
                   <v-tooltip top>
                        <v-btn small  dark  color="grey" @click="sortBy('title')" slot="activator">
                            <v-icon left>folder</v-icon>
                            <span>By Project Name</span>
                        </v-btn>
                        <span>Sort Project by name</span>
                   </v-tooltip>
                   <!--  -->
                   <v-tooltip top>
                        <v-btn small  dark  color="grey" @click="sortBy('person')" slot="activator">
                            <v-icon left>person</v-icon>
                            <span>By Person</span>
                        </v-btn>
                        <span>Sort Project by Person Name</span>
                   </v-tooltip>
                   <!--  -->
            </v-layout>
            <v-card class="pa-3"  v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project Title</div>
                        <div >{{project.title}}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div >{{project.person}}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2>
                        <div class="caption grey--text">Due By</div>
                        <div >{{project.due}}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2>
                        <div class="right">
                            <v-chip small :class="`${project.status}`" text-color="white">{{project.status}}</v-chip>
                        </div>
                        <div ></div>
                    </v-flex>
                </v-layout>
                <!-- <v-divider></v-divider> -->
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import db from '@/fb'
    export default {
        name:'Dashboard',
        data(){
            return{

                projects:[
                    
                ]
            }
        },
        methods: {

            sortBy(prop){

                this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
            }
        },
        created(){

            db.collection('vuetify-sample-proj').onSnapshot(res=>{

                const changes = res.docChanges();
                changes.forEach(change=>{

                    if(change.type==='added'){

                            this.projects.push({

                                ...change.doc.data(),
                                id:change.doc.id
                            })
                    }
                })
            })           
        }
    }
</script>

<style  scoped>

.completed{

            border-left: 4px solid green
}
.ongoing{

    border-left:4px solid yellow;
}

.overdue{

    border-left: 4px solid red;
}

.v-chip.completed{
    background: green;
}

.v-chip.ongoing{
    
    background: #ffaa2c;
}

.v-chip.overdue{
    background: red;
}
</style>