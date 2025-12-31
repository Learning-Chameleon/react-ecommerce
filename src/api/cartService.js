import api from "./axiosInstance";
export const cartService = {
  getAllCarts: api.get("/carts"),
  getCartById: (id) => api.get(`/carts/${id}`),
  createCart: (cartData) => api.post("/carts", cartData),
  updateCart: (id, cartData) => api.put(`/carts/${id}`, cartData),
  deleteCart: (id) => api.delete(`/carts/${id}`),
};
