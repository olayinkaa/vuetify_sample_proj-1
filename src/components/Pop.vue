<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
          large
        >
          ADD NEW PROJECT
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          ADD A NEW PROJECT
        </v-card-title>

        <v-card-text>
            <v-form ref="form">
                <v-text-field label="Title" v-model="project.title" solo prepend-icon="folder" :rules="inputRules"></v-text-field>
                <v-textarea 
                label="Information" 
                solo
                rows="3"
                v-model="project.content" prepend-icon="edit"
            
                >
                </v-textarea>
                <v-menu>
                  <v-text-field :value="formattedDate" slot="activator" label="Due Date" prepend-icon="date_range"></v-text-field>
                  <v-date-picker v-model="project.due"></v-date-picker>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn class="blue lighten-1 white--text"@click="submit">
                    <v-icon>done</v-icon>
                    Add Project
                </v-btn>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
      
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
    export default {

        name:'Pop',
        data(){

            return{

                dialog:false,
                project: {
                  
                    title:'',
                    content:'',
                    due:null

                },
                inputRules: [

                  v => !!v || 'Name is required',
                  v => /^[a-zA-Z]+$/.test(v) || 'Only Alphabet are allowed',
                  v => (v && v.length <= 10) || 'Name must be less than 10 characters'

                ],
                emailRules:[

                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ]
            }
        },
        methods: {

            submit(){

                if(this.$refs.form.validate()){

                  console.log(this.project.title)
                }

            }
        },
        computed: {

          formattedDate(){

                return this.project.due ? format(this.project.due,'DD/MM/YY'):''
          }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>