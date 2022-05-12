figma.showUI(__html__, {width: 320, height: 640, title: '100 Figma Practices'});

figma.ui.onmessage= msg =>{
    if (msg.type === 'send_value'){
        const status_key =msg.formDataObj
        figma.clientStorage.setAsync('Status', status_key.selectedStatus)
        console.log(status_key)}

    if (msg.type === 'send_value1'){
        const status_key1 =msg.formDataObj1
        figma.clientStorage.setAsync('Status1', status_key1.selectedStatus1)
        console.log(status_key1)
    }

    
async function postMessage() {
        const formData1 = await figma.clientStorage.getAsync("Status")
        const formData2 = await figma.clientStorage.getAsync("Status1")
        
        figma.ui.postMessage({type: "post-form-data", data: { formData1, formData2 }
      })
        
      postMessage()
    }

}
