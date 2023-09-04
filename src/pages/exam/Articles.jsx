import { useMutation } from "react-query";
import api from "../../api/config";
import {useRef} from "react";

const create = async (suggestion) => { 
    let data = await api.post('articles',suggestion).then(result => result.data);
    return data;
    };


const Articles = () => {

    const article = useRef(null);

    const mutation = useMutation("article", create,
    { 
      mutationKey: "article" })

   

    const handleSave = () => {
        let newKeyword = {
            text:article.current.value
        };
        mutation.mutateAsync(newKeyword);
      }

  return (
    <div className="articles">
        <textarea ref={article} type="text" rows={20} cols={80}/>
        <button onClick={handleSave}>Submit</button>
    </div>
  )
}

export default Articles