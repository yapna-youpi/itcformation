import React,{useRef,useState} from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../../../firebase.config'
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { storage } from '../../../../firebase.config';
import {toast} from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase.config';

const Signup = ({setLoading}) => {

  const [signupUsername,setSignupUsername] = useState('')
  const [signupMail,setSignupMail] = useState('')
  const [signupPhone,setSignupPhone] = useState('')
  const [signupPassword,setSignupPassword] = useState('')
  const [file,setFile] = useState(null)
  const formRef2 = useRef(null)


   //function to active upload file 
   const handleFile = ()=>{
    document.getElementById("file").click()
  }

  //function to signup with authentification 
  const signup = async (e) =>{
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupMail, signupPassword)
      const user = userCredential.user;

      console.log('le user',user)
      const storageRef = ref(storage, `images/${ Date.now() + signupUsername}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error)=>{
        toast.error(error.message)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          //update user profile
          await updateProfile(user, {
            displayName: signupUsername,
            photoURL: downloadUrl,
          });
          // store user indatabase store
          await setDoc(doc(db, 'users',user.uid), {
            uid: user.uid,
            displayName: signupUsername,
            signupMail,
            photoURL: downloadUrl,
          });
        });
      })

    } catch (error) {
      toast('Un probleme est signalé!')
    }
    
    let form = document.getElementById('form')
    form.reset()
  }

  return (
    <div className="form signupForm">
      <form onSubmit={signup} id='form'>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupUsername(e.target.value)}
            type="text"
            name="name"
            required
            placeholder="Username"
          />
          <i class="ri-user-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupMail(e.target.value)}
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <i class="ri-mail-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupPhone(e.target.value)}
            type="number"
            name="phone"
            required
            placeholder="phone"
          />
          <i class="ri-phone-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupPassword(e.target.value)}
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <i class="ri-mail-fill"></i>
          <div className="formGroup">
            <label onClick={handleFile} className="label_file">
              Choisir un fichier
            </label>
            <input
              className="input_file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="file"
            />
          </div>
          <input  
            type="submit"
            name="submit"
            className="btnRegister"
            value="Register"
          />
        </div>
        <a href="#" className="forgot">
          Forget Password
        </a>
      </form>
    </div>
  );
}

export default Signup