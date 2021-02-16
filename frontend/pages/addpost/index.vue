<template>
  <div class="wrap">
    <div>add post</div>
    <textarea ref="mdText"></textarea>
    <button @click="submit">작성</button>
  </div>
</template>

<script>
// import { createPkiopblog } from '@/src/graphql/queries'
import gql from 'graphql-tag'
// import { API, graphqlOperation } from 'aws-amplify'

export default {
  components: {},
  data() {
    return {
      info: null,
      links: 1,
    }
  },

  methods: {
    async submit() {
      const mdText = this.$refs.mdText
      const inputValue = {
        title: 'hello',
        mdContents: mdText && 'test',
        createAt: new Date(),
        updateAt: new Date(),
      }
      console.log('do')
      try {
        console.log('abc')
        const gqlres = gql`
          mutation CreatePkiopblog($input: CreatePkiopblogInput!) {
            createPkiopblog(input: $input) {
              id
              title
              mdContents
              createAt
              updateAt
            }
          }
        `
        console.log(gqlres)
        console.log('abc')

        const response = await this.$apollo.mutate({
          mutation: gqlres,
          variables: { input: inputValue },
        })
        // const response = await API.graphql(
        //   graphqlOperation(createPkiopblog, { input: inputValue })
        // )
        console.log('Item created!')
        console.log('res : ', response)
      } catch (error) {
        console.log('Error creating post...', error)
      }
    },
  },
  // async fetch() {
  //   this.info = await this.$http.$get(`http://localhost:4000/api/posts`)
  // },
  // fetchOnServer: true,
}
</script>

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    text-align: center;
  }
  textarea {
    border: 1px solid black;
    height: 600px;
  }
}
</style>
