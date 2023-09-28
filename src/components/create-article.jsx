import {Input, TextArea} from "../ui";
import {useState} from "react";

const CreateArticle = () =>{
    const [title, seTitle] =useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    return (
        <div className='text-center'>
            <h1 className='fs-2'>Create Article</h1>
            <div className='w-75 mx-auto'>
                <form action="">
                    <Input label={'Title'} state={title} setState={seTitle}/>
                    <TextArea label={'Description'} state={description} setState={setDescription}/>
                    <TextArea label={'Body'} state={body} setState={setBody} height={'240px'}/>
                    <button className="w-100 btn btn-lg btn-primary mt-2"  type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}
export default CreateArticle