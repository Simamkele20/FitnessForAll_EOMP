import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const lifeURL = "https://fitnessforall-eomp.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async register(context, payload) {
      try {
        let { msg } = await axios.post(`${lifeURL}users/register`, payload);
        context.dispatch("fetchUsers");
        sweet({
          title: "User Added.",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${lifeURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let { result } = (await axios.get(`${lifeURL}users/${payload.id}`))
          .data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let { msg } = await (
          await axios.patch(`${lifeURL}users/update/${payload.userID}`, payload)
        ).data;

        context.dispatch("fetchUsers");
        sweet({
          title: "Update user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteUser(context, id) {
      try {
        let { msg } = await axios.delete(`${lifeURL}users/delete/${id}`);

        context.dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addNewProduct(context, add) {
      try {
        let { msg } = await axios.post(`${lifeURL}products/addProduct`, add);

        context.dispatch("fetchProducts");
        sweet({
          title: "Adding Product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when adding products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${lifeURL}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let { result } = (await axios.get(`${lifeURL}products/${payload.id}`))
          .data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Retrieving a single product",
            text: "Product was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        console.log(e.message);
        sweet({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateProduct(context, payload) {
      try {
        let { msg } = await (
          await axios.patch(
            `${lifeURL}products/update/${payload.prodID}`,
            payload
          )
        ).data;
        context.dispatch("fetchProducts");
        sweet({
          title: "Update product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a product.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteProduct(context, payload) {
      try {
        let { msg } = await axios.delete(
          `${lifeURL}products/delete/${payload}`
        );

        context.dispatch("fetchProducts");
        sweet({
          title: "Delete product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a product.",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  modules: {},
});
