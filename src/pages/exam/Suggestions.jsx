import { useMutation } from "react-query";
import api from "../../api/config";
import {useRef} from "react";

const create = async (suggestion) => { 
    let data = await api.post('suggestions',suggestion).then(result => result.data);
    return data;
    };

const Suggestions = () => {

    const keywords = useRef(null);

    const mutation = useMutation("suggestion", create,
    { 
      mutationKey: "suggestion" })

   

    const handleSave = () => {
        let newKeyword = {
            words:keywords.current.value.toLowerCase()
        };
        mutation.mutateAsync(newKeyword);
      }

  return (
    <div className="keywords">
        <input ref={keywords} type="text" />
        <button onClick={handleSave}>Submit</button>
    </div>
  )
}

export default Suggestions