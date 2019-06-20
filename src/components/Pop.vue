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
          Privacy Policy
        </v-card-title>

        <v-card-text>
            <v-form>
                <v-text-field label="Title" solo></v-text-field>
                <v-textarea 
                label="Information" 
                solo
                rows="3"
            
                >
                </v-textarea>
                <v-btn class="blue lighten-1 white--text">
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
    export default {

        name:'Pop',
        data(){

            return{

                dialog:false
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>