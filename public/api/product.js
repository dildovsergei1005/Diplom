export function getProduct (id) {
    return axios.get(`${API_URL}/products/${id}`)
   }
   
   
   export function postProduct (data) {
    return axios.post(`${API_URL}/products`, data)
   }
   
   
   export function patchProduct (data) {
    return axios.patch(`${API_URL}/products`, data)
   }