<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="name" v-model="name" type="text" class="mdl-textfield__input"/>
          <label for="name" class="mdl-textfield__label">Name</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="name" v-model="name" type="text" class="mdl-textfield__input"/>
          <label for="name" class="mdl-textfield__label">Name</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="surname" v-model="surname" type="text" class="mdl-textfield__input"/>
          <label for="surname" class="mdl-textfield__label">Surname</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="street" v-model="street" type="text" class="mdl-textfield__input"/>
          <label for="street" class="mdl-textfield__label">Surname</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">          
          <label class="label" for="email">Email</label>
          <input class="mdl-textfield__input" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
          <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="actions">
          <a @click.prevent="postCat(catUrl,name)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CONTACT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
//  import parse from 'xml-parser'
  import postCat from '@/mixins/postCat'

  export default {
    mixins: [postCat],
    data () {
      return {
        'catUrl': null,
        'title': null,
        'name': null,
        'surname': null,
        'street': null,
        'city': null,
        'state': null,
        'postcode': null,
        'email': null,
        'phone': null
      }
    },
    mounted () {
    // this.$http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
    //   this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
    // })
      // GET /someUrl
      this.$http.get('https://randomuser.me/api/?results=1').then(response => {
        // get body data
        this.someData = response.body
        console.log(this.someData)
        this.catUrl = this.someData.results[0].picture.large
        this.title = this.someData.results[0].name.title
        this.name = this.someData.results[0].name.first
        this.surname = this.someData.results[0].name.last
        this.street = this.someData.results[0].location.street
        this.city = this.someData.results[0].picture.city
        this.state = this.someData.results[0].picture.state
        this.postcode = this.someData.results[0].picture.postcode
        this.email = this.someData.results[0].email
        this.phone = this.someData.results[0].phone
      })
    }
  }
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
  .card-image__picture{
    display: none;
  }
</style>
