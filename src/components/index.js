import {useState, useEffect} from 'react'
import Form from './Form';

export default function Listele() {
   const [contacts, setContacts] = useState ([]);
   useEffect(() => {
       console.log(contacts);
   }, [contacts]);


    return (
        <div>
            <Form addContacts={setContacts}></Form>
        </div>
    )
}


