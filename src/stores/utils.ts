import { defineStore } from "pinia";
import { ref,reactive, type Ref,watch } from "vue";

export const useUtilStore=defineStore("utilselektra",() => {

    const metadata=ref()

    const setmetadata=(data:any) => {
      metadata.value=data
    }
    const clearmetadata=() => {
      metadata.value=''
    }

    return {
        metadata,
        setmetadata,
        clearmetadata
    }

})

