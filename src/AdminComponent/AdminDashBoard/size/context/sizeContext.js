import { createContext,useEffect,useState } from "react";
import sizeService from '../../../../Services/AdminServices/sizeServices';
import useNotification from '../../../../component/resuable/useNotification';
export const SizeContext =createContext();

const SizeProvider = ({ children }) => {
    const { notifySuccess, notifyError } = useNotification();
    const [showCreateForm, setCreateForm] = useState(false)
    const [updateDetail,setUpdateDetail]=useState()
   const [size, setsize] = useState([]);
   const [submitloading,setSubmitloading]=useState(false)
   const CreateSize=async(values)=>{
    setSubmitloading(true)
        console.log(values)
        const apidata={
            name:values.name,
            code:values.code,
            desc:values.desc
        }
        const apicall=await sizeService.createSize(apidata)
        console.log(apicall)
        if(apicall.status===201){
            setCreateForm(false)
            notifySuccess("Product Type Created Successfully")
            setSubmitloading(false)
        }
        else{
            notifyError(apicall?.response?.data?.message ? apicall?.response?.data?.message  :"Failed to Create Product Type")
            setSubmitloading(false)

        }
   }
   const getSizeList=async()=>{
            const apicall=await sizeService.getSize()
            console.log(apicall)
            if(apicall?.status===200){
                if(apicall.data.result.length>0){
                    setsize(apicall.data.result)
                }
                else{
                    setsize([])
                }
            }
            else{
                setsize([])
            }
   }
   const updateSizeclick= async(value)=>{
    setUpdateDetail({
        name:value.name,id:value._id,code:value.code,desc:value.description
    })
    setCreateForm(true)
   }
   const updateSize =async(value)=>{
    setSubmitloading(true)
    const apidata={ 
        name:value.name,
        code:value.code,
        desc:value.desc,
        id:updateDetail.id
    }
    const apicall=await sizeService.updateSize(apidata)
    console.log(apicall)
    if(apicall.status===200){
        notifySuccess("Product Type Update Successfully")
        setCreateForm(false)
        setSubmitloading(false)

    }
    else{
        notifyError(apicall?.response?.data?.message ? apicall?.response?.data?.message  :"Failed to Update Product Type")
        setSubmitloading(false)

    }
   }
   const deleteSizeclick=async(value)=>{
    
        const apicall=await sizeService.deleteSize(value._id)
        console.log(apicall)
        if(apicall.status===200){
            notifySuccess("Product Type Delete Successfully")
            getSizeList()
        }
        else{
            notifyError(apicall?.response?.data?.message ? apicall?.response?.data?.message  :"Failed to Delete Product Type")
        }
    }

    return (
        <SizeContext.Provider value={{
            CreateSize,getSizeList,
            showCreateForm, setCreateForm,size,updateSizeclick,
            updateDetail,setUpdateDetail,updateSize,
            deleteSizeclick,submitloading
        }}>
            {children}
        </SizeContext.Provider>
    );
};
export default SizeProvider;
