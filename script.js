function show_detail()
{
    let name=document.querySelector('.form_input1').value
    let Check_in_Date=document.querySelector('.form_input2').value
    let Total_Number_of_Days=parseInt(document.querySelector('.form_input3').value)
    console.log("Total_Number_of_Days",Total_Number_of_Days);
    let Total_No_of_person=document.querySelector('.form_input4').value
    console.log("person",Total_No_of_person);
    let delux_room=document.querySelector('.delux_room')
    let suite_room=document.querySelector('.suite_room')
    let ac=document.querySelector('.ac_aminites') 
    let locker=document.querySelector('.locker_aminites')
    let amount_input=parseInt(document.querySelector('.amount_input').value)
    let balance_amount=document.querySelector('.balance_amount')
    let Room_price_deluxe=parseInt(document.querySelector('.Room_price_deluxe').innerText)
    let Room_price_suite=parseInt(document.querySelector('.Room_price_suite').innerText)
    console.log("room price suit",Room_price_suite);
    let aminites_ac=parseInt(document.querySelector('.aminites_ac').innerText)      
     let aminites_locker=parseInt(document.querySelector('.aminites_locker').innerText)
     let locker_aminites=document.querySelector('.locker_aminites')
     let ac_aminites=document.querySelector('.ac_aminites')
     if(Total_No_of_person<=2)
     {
        if(delux_room.checked==true && ac_aminites.checked)
        {
          let roon_type_details=document.querySelector('.roon_type_details').innerText=delux_room.value
          
          let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_deluxe+aminites_ac)*Total_Number_of_Days)-amount_input

          console.log(balance_amount);
        }
        else if(delux_room.checked==true && locker_aminites.checked)
        {
          let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_deluxe+aminites_locker)*Total_Number_of_Days)-amount_input
        }
        else if(suite_room.checked==true && ac_aminites.checked){
            let roon_type_details=document.querySelector('.roon_type_details').innerText=suite_room.value
            let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_suite+aminites_ac)*Total_Number_of_Days)-amount_input
           console.log(balance_amount);
           
        }
        else if(suite_room.checked==true && locker_aminites.checked)
        {
            let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_suite+aminites_locker)*Total_Number_of_Days)-amount_input
        }
     }




     else
     {
        if(delux_room.checked==true && ac_aminites.checked)
    {
      let roon_type_details=document.querySelector('.roon_type_details').innerText=delux_room.value
      
      let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_deluxe+aminites_ac+(Total_No_of_person-2)*1000)*Total_Number_of_Days)-amount_input
      console.log(balance_amount);
    }
    else if(delux_room.checked==true && locker_aminites.checked)
    {
      let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_deluxe+aminites_locker+(Total_No_of_person-2)*1000)*Total_Number_of_Days)-amount_input
    }
    else if(suite_room.checked==true && ac_aminites.checked){
        let roon_type_details=document.querySelector('.roon_type_details').innerText=suite_room.value
        let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_suite+aminites_ac+(Total_No_of_person-2)*1000)*Total_Number_of_Days)-amount_input
       console.log(balance_amount);
       
    }
    else if(suite_room.checked==true && locker_aminites.checked)
    {
        let balance_amount=document.querySelector('.balance_amount').innerText=((Room_price_suite+aminites_locker+(Total_No_of_person-2)*1000)*Total_Number_of_Days)-amount_input
    }
     }
  
    
    // ac_aminites
    // locker_aminites

    if(ac_aminites.checked==true)
    {
        let Aminites_both_locker=document.querySelector('.Aminites_both_locker').innerText=ac_aminites.value 
    }
    if(locker_aminites.checked==true)
    {
        let Aminites_both_locker=document.querySelector('.Aminites_both_locker').innerText=locker_aminites.value   
    }
    
    
      let name_customer=document.querySelector('.name_customer').innerText=name
    
   
    
      let date=document.querySelector('.date').innerText=Check_in_Date
    
  
      
         let days=document.querySelector('.days').innerText=Total_Number_of_Days
    
   
    
      let total_person=document.querySelector('.total_person').innerText=Total_No_of_person
  
    
   
    
      let addvance_amount=document.querySelector('.addvance_amount').innerText=amount_input
   
 
    
      console.log("Advance amount is mandatary");
  
// let Aminites_both_locker=document.querySelector('.Aminites_both_locker').innerText
  let display_details=document.querySelector('.output')
  display_details.classList.remove('output')
}
