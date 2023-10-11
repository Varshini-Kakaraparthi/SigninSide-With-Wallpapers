import React, { useState } from 'react';
import axios from 'axios';
function AddPost() {
  const [formData, setFormData] = useState({ title: '', body: '' }); 
  const handleChange = (e) => { 
  const { name, value } = e.target; 
  setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => { 
  e.preventDefault();
  axios.post('http://localhost:3000/posts', formData) 
  .then(response => { 
    console.log('Post created:', response.data);
     // Reset form after successful submission 
    setFormData({ title: '', body: '' }); 
  }) 
  .catch(error => {
    console.error('Error creating post:', error);
  });
};
return ( 
<div>
   <h2>Add a Post</h2> 
   <form onSubmit={handleSubmit}>
     <div> 
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
     </div> 
     <div>
       <label>Body:</label> 
       <textarea name="body" value={formData.body} onChange={handleChange} /> 
      </div>
       <button type="submit">Submit</button> 
    </form> 
  </div>
 ); 
}
export default AddPost;