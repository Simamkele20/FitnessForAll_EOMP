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
          <button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add a User</button>
        </div>
             <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add new USer</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <h5 class="text-start">User Name: </h5> 
     <input type="text" placeholder="Name" class="form-control">
    <h5 class="text-start mt-2">User LastName: </h5> 
     <input type="text mt-2" placeholder="Surname" class="form-control">
    <h5 class="text-start mt-2">User Gender: </h5> 
     <input type="text" placeholder="Gender" class="form-control">
    <h5 class="text-start mt-2">User Age: </h5> 
     <input type="number" placeholder="Age" class="form-control">
    <h5 class="text-start mt-2">User Email Address: </h5> 
     <input type="text" placeholder="Email Address" class="form-control">
    <h5 class="text-start mt-2">User Password: </h5> 
     <input type="text" placeholder="Password" class="form-control">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-dark">Add User</button>
      </div>
    </div>
  </div>
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
      <tbody  class="text-center mb-5">
        <tr  v-for="user in users" :key="user.userID">
          <th scope="row"> {{ user.UserID }}</th>
          <td> {{ user.firstName}}</td>
          <td>{{ user.lastName}}</td>
          <td>{{ user.userAge}}</td>
          <td>{{ user.gender}}</td>
          <td>{{ user.emailAdd}}</td>
          <td> {{ user.userRole}}</td>
          <td><button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"> Edit</button></td>
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
        },
  }
  </script>
  
  