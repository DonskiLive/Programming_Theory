import Type from './AppActionTypes';

export const startLoading = ()=>{
    return{
        type: Type.showLoader
    }
}

export const stopLoading = ()=>{
    return {
        type: Type.hideLoader
    }
}