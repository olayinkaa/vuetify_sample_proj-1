<template>
    <div>
        <v-container>
            <h1>Project</h1>
               <v-layout row wrap>
                   <v-flex xs12 md9 class="mx-auto">
                        <v-expansion-panel>
                                <v-expansion-panel-content
                                v-for="project in myProjects"
                                :key="project.title"
                                >
                                <template v-slot:header>
                                    <div>{{project.title}}</div>
                                </template>
                                <v-card>
                                    <v-card-text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </v-card-text>
                                </v-card>
                                </v-expansion-panel-content>
                        </v-expansion-panel>
                   </v-flex>
               </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name:'Project',
        data(){

            return {

                   projects:[
                    {title:'Design a website',person:'David james',due:'27th July, 2012',status:'ongoing'},
                    {title:'Design a Prototype',person:'yusuf Omotayo',due:'2th July, 2012',status:'completed'},
                    {title:'Design an API',person:'Ibrahim Olayinka',due:'2th August, 2012',status:'ongoing'},
                    {title:'Deployment of project',person:'Ibrahim Olayinka',due:'5th August, 2012',status:'overdue'}
                ]
            }

        },
        computed: {

            myProjects: function(){

                return this.projects.filter(project=>{

                    return project.person==='Ibrahim Olayinka'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>