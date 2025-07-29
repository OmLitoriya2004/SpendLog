import React, { useContext, useEffect } from 'react';
import { userContext } from './userContext.jsx';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance.js';
import { API_PATHS } from '../utils/apiPath.js';

export const useUserAuth = () => {
    const  { user , updateUser, clearUser} =useContext(userContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user) return;
        let isMounted=true;
        const fetchUserInfo = async () => {
            try {
                const res = await axiosInstance.get(
                  API_PATHS.AUTH.GET_USER_INFO
                );
                if(isMounted && res.data){
                    updateUser(res.data);
                }
            } catch (e) {
                console.error("Unable to fetch user data" , e);
                if(isMounted){
                    clearUser();
                    navigate('/login');
                }
            }
        }
        fetchUserInfo();
        return ()=>{
            isMounted=false;
        }
    },[updateUser , clearUser, navigate]);
}
