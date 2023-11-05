<template>
  <div>
    <p v-if="error">Something went wrong...</p>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading...</p>
    <table v-else class="styled-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in result.posts" :key="index">
          <td>{{ post.title }}</td>
          <td>{{  post.author.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import gql from 'graphql-tag'
  import { useQuery } from '@vue/apollo-composable'

  const CHARACTERS_QUERY = gql`
    query Posts {
      posts {
        title
        author {
          name
          country
        }
      }
    }
  `
  const { result, loading, error } = useQuery(CHARACTERS_QUERY)
</script>

<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
