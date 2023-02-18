import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useBrands from "../../query-hooks/useBrands";
import useCategories from "../../query-hooks/useCategoires";
import useProducts from "../../query-hooks/useProducts";

function ProductsForm() {
    const categories = useCategories();
    const brands = useBrands();
    const products = useProducts();
    const {push} = useHistory();

    
  const updateProduct = (id) => {
    push("/admin/products/update",id)
 
   }

   const handleDeleteProduct = (id) => {

    axios.delete(`https://localhost:7216/api/Products/completelyDelete/${id}`)
      .then(response => {
        console.log('Product deleted:', response.data);
        // handle successful response
      })
      
      .catch(error => {
        console.error('Error deleting brand:', error);
        // handle error
      })
    
  };

  return (
    <>
      <div className="admin-heading">
        <div className="container">
          <h1 className="shop-title-heading">Admin</h1>
        </div>
      </div>
      <div className="buttons d-flex justify-content-center mt-5">
      <Link to="/admin/products/create" className="btn btn-primary">Create</Link>
      <Link to="/admin/productsColor" className="btn btn-primary mx-2">Set Color Product</Link>
      <Link to="/admin/productsColorImage" className="btn btn-primary mx-2">Set Image Product</Link>
      </div>
      
      <div class="table-responsive my-4">
           <table class="table table-hover">
             <thead>
               <tr>
                 <th>Image</th>
                 <th>Name</th>
                 <th>Price</th>
                 <th>Brand</th>
                 <th>Category</th>
                 <th>Operations</th>
               </tr>
             </thead>
             <tbody>
                {products.isLoading && <p>Loading...</p>}
                {products.isError && <p>Cannot Fetch Users</p>}
                {products.isSuccess && 
               
               products.data.map((product) => (
                   <tr key={product.id}>
                     <td>
                       <img
                         className="form-image"
                         src={product.imageName}
                         alt=""
                       />
                     </td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.brandName}</td>
                     <td>{product.categoryName}</td>
                     <td >
                         <Link className="btn btn-warning me-2" onClick={() => updateProduct(product.id)}>Update</Link>
                         <Link className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</Link>
                     </td>
                
                   </tr>
                 ))}
             </tbody>
           </table>
         </div>
    </>
  );
}

export default ProductsForm;
