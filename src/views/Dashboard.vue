<template>
    <div>
        <h1 class="subheading grey--text">Dashboard</h1>
        <v-container class="my-5">
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
                        <div class="caption grey--text">Status</div>
                        <div >{{project.status}}</div>
                    </v-flex>
                </v-layout>
                <!-- <v-divider></v-divider> -->
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name:'Dashboard',
        data(){
            return{

                projects:[
                    {title:'Design a website',person:'David james',due:'27th July, 2012',status:'ongoing'},
                    {title:'Design a Prototype',person:'yusuf Omotayo',due:'2th July, 2012',status:'completed'},
                    {title:'Design an API',person:'Ibrahim Olayinka',due:'2th August, 2012',status:'ongoing'},
                    {title:'Deployment of project',person:'Ibrahim Olayinka',due:'5th August, 2012',status:'overdue'}
                ]
            }
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
</style>