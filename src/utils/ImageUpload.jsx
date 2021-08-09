import React, { useState } from 'react'
import firebase from "firebase"

const ImageUpload = () => {

  const [imageData, setImageData] = useState({
    image: null,
    progress:0,
    downloadURL: null
  })

  const handleChange = (e) =>{
    if(e.target.files[0]){
        setImageData(prev => ({...prev, image: e.target.files[0]}));
  }
    // console.log(e.target.files[0])
  }

  const handleUpload = () =>{
    // console.log(this.state.image);
    let file = imageData.image;
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef.child('event_banners/' + file.name).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>{
        const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
        setImageData(prev => ({...prev, progress: progress}));
      },(error) =>{
        throw error
      },() =>{
        // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{

        uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
          setImageData(prev => ({...prev,
            downloadURL: url
          }))
        })
      document.getElementById("file").value = null

    }
  ) 
  }

  return (
    <div className="App">
      <h4>upload image</h4>
      <label>
        Choose file
      <input type="file" id="file" onChange={handleChange} />        
      </label>

      {imageData.progress}
      {imageData.image && <button className="button" onClick={handleUpload}>Upload</button>}
      <img
        className="ref"
        src={imageData.downloadURL || "https://via.placeholder.com/400x300"}
        alt="Uploaded Images"
        height="300"
        width="400"
      />
    </div>
  )

}

export default ImageUpload