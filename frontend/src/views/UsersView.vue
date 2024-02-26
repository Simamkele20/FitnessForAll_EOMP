<template>
    <div class="container ">
      <div class="mt-4">
        <nav class="navbar nav-pills nav-underline bg-black w-25 justify-content-center mx-auto" role="tablist">
          <ul class="d-flex mt-2  ">
            <li class="nav-item mx-2">
                <router-link to="/admin" class="nav-link link-light">Products </router-link>
          </li>
          <li class="nav-item mx-4">
           <a class="nav-link link-light">Users</a> 
          </li>
          </ul>
       
        </nav>
      </div>
  
      <div class="bg-black text-center mt-5">
      </div>
      <div class=" prodBtn row text-end">
        <div class="col">
          <input type="text" placeholder="Search User by name" class="form-control">
        </div>
        <div class="col ">
          <button class=" btn btn-dark"> Filter</button>
        </div>
        <div class="col-2 mx-3">
          <button class=" btn btn-dark"> Add a User</button>
        </div>
      </div>
    </div>
    <table class="AdiCont table mt-5 text-center mx-auto"  v-if="users">
      <thead>
        <tr>
          <th> User ID</th>
          <th>User Name</th>
          <th>User Last</th>
          <th>User Age</th>
          <th>Gender</th>
          <th>Email Address</th>
          <th>User Role</th>
          <th> Action</th>
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr  v-for="user in users" :key="user.userID">
          <th scope="row"> {{ user.UserID }}</th>
          <td> {{ user.firstName}}</td>
          <td>{{ user.lastName}}</td>
          <td>{{ user.userAge}}</td>
          <td>{{ user.gender}}</td>
          <td>{{ user.emailAdd}}</td>
          <td> {{ user.userRole}}</td>
          <td><button class=" btn btn-dark"> Edit</button></td>
          <td><button class="  btn btn-dark"> Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div class="row mx-auto" v-else>
          <Spinner />
        </div>
  </template>
  
  <script>
  import Spinner from '@/components/Spinner.vue';
  export default {
    name: "UsersView",
    components: {
       Spinner
    },
    computed:{
            users() {
                return this.$store.state.users
            }
        },
        mounted() {
            this.$store.dispatch('fetchUsers')

        }
  }
  </script>
  
  