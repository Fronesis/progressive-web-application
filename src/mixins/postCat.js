const postCat = {
  methods: {
    postCat (catUrl, name) {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': catUrl,
          'name': name,
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/')
      )
    }
  }
}

export default postCat
