import { useEffect, useState } from "react";
import {useform} from 'react-hook-form'

const { register, handleSubmit} = useform({shouldUseNativeValidation:true})
const onSubmit = async data => {console.log(data)};

function Projectdetails() {
    const [, setProjectdetails] = useState([]);

    useEffect(()=> {
        fetch("https://project-tracker-phase5.herokuapp.com/projects")
        .then((res) => res.json())
        .then((data) => {
            setProjectdetails(data)
        })
    },[])

    return (
        
     <div>
        <section>
            <div className="container1">
            <form onSubmit={handleSubmit(onSubmit)}/>
                <h1>Project Details</h1>
                <form id='form'className="Form1">
                    <input type="text"placeholder="Name"/>
                    <input type="text"placeholder="Description"/>
                    <input type="text"placeholder="Github Link"/>
                    <input type="text"placeholder="Category"/>

                    <button className="btn">Add Projects</button>
                    <button className="btn">Update Project</button>

                </form>

            </div>

            <div className="container2">
                <h2>Add Project Members</h2>
                <form id="form"className="Form2">
                    <input type="text"placeholder="Email"/>
                    <button className="btn">Add</button>

                </form>

            </div>
        </section>
     </div>   
    )
}


export  default Projectdetails;