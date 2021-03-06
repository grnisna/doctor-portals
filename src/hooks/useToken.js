import { useEffect, useState } from "react"

const useToken = user =>{
    const [token,setToken] = useState('');
    console.log(token);
    
    useEffect( ()=>{
        console.log(user);
        const email = user?.user.email;
        const currentUser = {email:email};
        if(email){
            const url = `https://shrouded-hollows-10086.herokuapp.com/user/${email}`;
            
            fetch(url ,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then( data => {
                
                const token = data.token;
                localStorage.setItem('accessToken',token);
                setToken(token);
            })
        }
    } ,[user]);
    return [token];
}

export default useToken;