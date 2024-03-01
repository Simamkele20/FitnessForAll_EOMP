<template>
  <div class="container ">
    <div class="mt-4">
      <nav class="navbar nav-pills nav-underline bg-black w-100  w-md-25 justify-content-center mx-auto" role="tablist">
        <ul class="d-block d-md-flex mt-2  ">
          <li class="nav-item mx-2">
            <router-link to="/admin" class="nav-link link-light">Products </router-link>
          </li>
          <li class="nav-item mx-4">
            <a class="nav-link link-light">Users</a>
          </li>
        </ul>

      </nav>
    </div>

    <div class=" prodBtn d-block d-md-flex row text-end mt-4">
      <div class="col">
        <input v-model="searchInput" type="text" placeholder="Search User by firstName" @input="Search"
          class="form-control">
      </div>
      <div class="col ">
        <button class=" btn btn-dark"> Filter</button>
      </div>
      <div class="col-2 mx-3">
        <button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add a User</button>
      </div>
      <!-- Modal-->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">User Name: </h5>
              <input v-model="payload.firstName" type="text" placeholder="Name" class="form-control">
              <h5 class="text-start mt-2">User LastName: </h5>
              <input v-model="payload.lastName" type="text mt-2" placeholder="Surname" class="form-control">
              <h5 class="text-start mt-2">User Gender: </h5>
              <input v-model="payload.gender" type="text" placeholder="Gender" class="form-control">
              <h5 class="text-start mt-2">User Age: </h5>
              <input v-model="payload.userAge" type="number" placeholder="Age" class="form-control">
              <h5 class="text-start mt-2">User Email Address: </h5>
              <input v-model="payload.emailAdd" type="text" placeholder="Email Address" class="form-control">
              <h5 class="text-start mt-2">User Password: </h5>
              <input v-model="payload.userPass" type="text" placeholder="Password" class="form-control">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="addUser()" type="button" class="btn btn-dark">Add User</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal edit -->
      <div class="modal fade" :id="'edit' + user.UserID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"   v-for="user in users" :key="user.UserID">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="edit">Edit User</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">User Name: </h5>
              <input v-model="payload.firstName" type="text" :placeholder="user.firstName" class="form-control">
              <h5 class="text-start mt-2">User LastName: </h5>
              <input v-model="payload.lastName" type="text" :placeholder="user.lastName" class="form-control">
              <h5 class="text-start mt-2">User Gender: </h5>
              <input v-model="payload.gender" type="text" :placeholder="user.gender" class="form-control">
              <h5 class="text-start mt-2">User Age: </h5>
              <input v-model="payload.userAge" type="text" :placeholder="user.userAge" class="form-control">
              <h5 class="text-start mt-2">User Email Address: </h5>
              <input v-model="payload.emailAdd" type="text" :placeholder="user.emailAdd" class="form-control">
              <h5 class="text-start mt-2">User Password: </h5>
              <input v-model="payload.userPass" type="text" placeholder="Enter your password" class="form-control">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button  @click="editUser(user.UserID)" type="button" class="btn btn-dark">Update User</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal delete-->
      <div class="modal fade" :id="'delete' + user.UserID" tabindex="-1" aria-labelledby="delete" aria-hidden="true"
        v-for="user in users" :key="user.userID">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title  fs-5" id="delete">Delete User</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Are you sure?</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click.prevent="deleteUser(user.UserID)" type="button" class="btn btn-dark">Delete User</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <table class="AdiCont table mt-5 text-center mx-auto" v-if="users">
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
    <tbody class="text-center mb-5">
      <tr v-for="user in filterUser" :key="user.userID">
        <th scope="row"> {{ user.UserID }}</th>
        <td> {{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.userAge }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.emailAdd }}</td>
        <td> {{ user.userRole }}</td>
        <td> <button class=" btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#edit' + user.UserID"> Edit</button></td>

        <td><button class="  btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#delete' + user.UserID">
            Delete</button></td>
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
  data() {
    return {
      searchInput: '',
      payload:
      {
        "firstName": null,
        "lastName": null,
        "userAge": null,
        "gender": null,
        "emailAdd": null,
        "userPass": null,
      }

    }
  },
  components: {
    Spinner
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    filterUser() {
      return this.$store.state.users.filter(user =>
        user.firstName?.toLowerCase().includes(this.searchInput.toLowerCase())
      );

    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
  },
  methods: {
    Search() {
      'Search input:', this.searchInput
    },
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID)
    },
    addUser() {
      this.$store.dispatch('register', this.payload)
    },
    editUser(userID) {
      const updateData = Object.assign({}, {userID}, this.payload)
      this.$store.dispatch('updateUser', updateData)
    }
  }

}
</script>
  
  


<style src="../assets/css/style.css"></style>