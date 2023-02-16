import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

function SliderForm() {
    const {push} = useHistory()
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const { data: sliders } = await axios.get(
            "https://localhost:7216/api/Sliders"
          );
          setSliderData(sliders);
        };
        fetchData();
      }, []);

    const updateSlider = (id) => {
        push("/admin/slider/update",id)
     
       }
     
       const handleDeleteSlider = (id) => {
     
         axios.delete(`https://localhost:7216/api/Sliders/completelyDelete/${id}`)
           .then(response => {
             console.log('Slider deleted:', response.data);
             // handle successful response
           })
           .catch(error => {
             console.error('Error deleting Slider:', error);
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

   <div class="col-lg-12 grid-margin stretch-card mx-auto mt-5">

     <div class="card">
       <div class="card-body">

         <h4 class="card-title">Sliders</h4>
      
         <Link to="/admin/slider/create" className="btn btn-primary">Create</Link>

         <div class="table-responsive">
           <table class="table table-hover">
             <thead>
               <tr>
                 <th>Image</th>
                 <th>Title</th>
                 <th>Sub Title</th>
                 <th>Button Content</th>
                 <th>Operations</th>
               </tr>
             </thead>
             <tbody>
             
               {
                 sliderData.map((slider) => (
                   <tr key={slider.id}>
                     <td>
                       <img
                         className="form-image"
                         src={slider.imageName}
                         alt=""
                       />
                     </td>
                     <td>{slider.title}</td>
                     <td>{slider.subtitle}</td>
                     <td>{slider.buttonName}</td>
                     <td >
                         <Link className="btn btn-warning me-2" onClick={() => updateSlider(slider.id)} >Update</Link>
                         <Link onClick={() => handleDeleteSlider(slider.id)} className="btn btn-danger">Delete</Link>
                     </td>
                
                   </tr>
                 ))}
             </tbody>
           </table>
         </div>
       </div>
     </div>
   </div>
 </>
  )
}

export default SliderForm