import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
<<<<<<< HEAD
import toast from "react-hot-toast";
=======
>>>>>>> 60e6126fe36535b74058effecee41ca84266f8ff


export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
<<<<<<< HEAD
    isUpdatingProfile: false,

    isCheckingAuth: true,

    chechAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")

            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in checkAuth:", error)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully");
             
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },
=======
    isUpdatingProfile : false,

    isCheckingAuth: true, 

    chechAuth: async()=>{
        try{
            const res = await axiosInstance.get("/auth/check")

            set({authUser:res.data})
        }catch(error){
            console.log("Error in checkAuth:", error)
            set({authUser: null})
        }finally{
            set({isCheckingAuth:false})
        }
    }
>>>>>>> 60e6126fe36535b74058effecee41ca84266f8ff
}))