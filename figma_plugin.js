<script>
document.getElementById('submit').onclick=(event)=>{
  event.preventDefault()
  let pluginForm = document.querySelector('#status')
  let pluginFormData = new FormData(pluginForm)
  if(document.querySelector("#Adone").checked){
    pluginFormData.set('selectedStatus','Yes')
  }
  let formDataObj ={}
  for (let[key, value] of pluginFormData){
    formDataObj[key] = value
  }

 parent.postMessage({pluginMessage:{type:'send_value', formDataObj}}, '*')
}

document.getElementById('submit1').onclick=(event)=>{
  event.preventDefault()
  let pluginForm1 = document.querySelector('#status1')
  let pluginFormData1 = new FormData(pluginForm1)
  if(document.querySelector("#Bdone").checked){
    pluginFormData1.set('selectedStatus1','Yes')
  }
  let formDataObj1 ={}
  for (let[key, value] of pluginFormData1){
    formDataObj1[key] = value
  }

 parent.postMessage({pluginMessage:{type:'send_value1', formDataObj1}}, '*')
}
document.getElementById('show_status').onclick=(event)=>{
 parent.postMessage({pluginMessage:{type:"show_status"}}, '*') 
}


 onmessage = (event) => {
  const message = event.data.pluginMessage
    
    if (message.type === "post-form-data") {
      document.getElementById('stats').innerHTML = message.data.formData1
      document.getElementById('stats1').innerHTML = message.data.formData2
    }

  
  console.log("got this from the plugin code", event.data.pluginMessage)
 }	
 </script>
