




import {ChangeEvent,useState} from 'react'
//import { StudentForm1 } from './StudentForm1';
//import { StudentForm2 } from './StudentForm2';
import {Form,Button } from 'react-bootstrap';
//import './TsForm.css';
import './App.css'
import UserOne from './UserOne'

//import ImageUploading, { ImageListType } from "react-images-uploading";
export interface IFormState{
    id:number;
   
    
}
const defaultValue :IFormState={
   id:0
   
    

}
export interface UserListProps {
    id: 0;// don't have to redeclare the object again
};
//const UserProfile
const SearchUser =() =>{
    const [formState,setFormState]=useState<IFormState>(defaultValue);
   const [number, setNumber] = useState(0);
   // const [imgState,setImgState]=useState<IFormImage>(defaultValue1);
   // const number=0;
  //  const [image, setImage] = useState("");
  //  const [image, setImage] = useState([]);
 // const maxNumber = 69;

 
  
    
  
   
    const handleFieldUpdate=(value:string,FieldNAme:string)=>{
      setFormState({
          ...formState,
          [FieldNAme] :value
          
      })
      
    }
   const handleId=()=>{
        setFormState({
            ...formState,
            id :formState.id
        })
    }
   
   
    return(
        
        <div>
        
           
            <Form>
           
                <Form.Group controlId="formGroupId">
                   
                <Form.Label>User id</Form.Label><br/>
                    <Form.Control type="text" placeholder="enter name"
                    value={formState.id}
                    onChange = {(e)=>handleFieldUpdate(e.target.value,'id')
                
                }
                    />

                </Form.Group><br/>
                 <Form.Group>
                    <Button onClick={(event)=>{
                        event.preventDefault();
                        console.log(formState);
                        
                    }}  type="submit">Search</Button>
                  

                </Form.Group>
        
  
</Form>
 <UserOne id={
    formState.id
}/>  
        </div>
              
               

               
                    
              
                    
                
              
    )

   
}
export default SearchUser;