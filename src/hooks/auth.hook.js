import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData';

export const useAuth = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const loginHook = useCallback((email, password) => {
        setEmail(email);
        setPassword(password);

        localStorage.setItem(storageName, JSON.stringify({
            email: email, password: password
        }))
    },[]);
    
    const logoutHook = useCallback(() => {
        setEmail(null);
        setPassword(null);
        localStorage.removeItem(storageName);
    },[]);

    useEffect(()=> {
        // const data = JSON.parse(localStorage.getItem(storageName));
        // if(data && data.token) {
        //     login(data.token, data.userId);
        // }
    },[loginHook])

    useEffect(()=> {
        const user =  JSON.parse(localStorage.getItem(storageName));
        console.log('user: ', user); 
    },[])

    return {loginHook, logoutHook, isAuth};
}