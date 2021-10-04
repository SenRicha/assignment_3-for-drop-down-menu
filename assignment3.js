function populate(s1,s2){
    var s1 = document.getElementById(s1)
    var s2 = document.getElementById(s2)
    // var s3 = document.getElementById(s3)



    s2.innerHTML = ""

    if(s1.value == "india"){
        var optionArray = ["|","maharashtra|Maharashtra","orissa|Orissa", "rajasthan|Rajasthan", "tamil nadu|Tamil Nadu"]
    }
    if(s1.value == "usa"){
        var optionArray = ["|","california|California","texas|Texas", "florida|Florida", "alaska|Alaska", "georgia|Georgia"]
    }
    if(s1.value == "canada"){
        var optionArray = ["|","british columbia|British Columbia","nova scotia|Nova Scotia", "new brunswick|New Brunswick"]
    }
    
    
    for (var option in optionArray){
        var pair = optionArray[option].split("|")
        var newOption = document.createElement("option")
        newOption.value = pair[0]
        newOption.innerHTML = pair[1]
        s2.options.add(newOption)
    }

    // s3.innerHTML = ""

    // if(s2.value == "maharashtra"){
    //     var optionArray2 = ["nagpur|Nagpur","pune|Pune", "mumbai|Mumbai", "aurangabad|Aurangabad"]
    // }
    // if(s2.value == "orissa"){
    //     var optionArray2 = ["bhubhaneshwar|Bhubhaneshwar","cuttack|Cuttack", "puri|Puri", "rourkela|Rourkela", "konark|Konark"]
    // }
    // if(s2.value == "rajasthan"){
    //     var optionArray2 = ["udaipur|Udaipur","jodhpur|Jodhpur", "jaipur|Jaipur", "ajmer|Ajmer", "kota|Kota"]
    // }
    // for (var option in optionArray2){
    //     var pair1 = optionArray2[option].split("|")
    //     var newOption = document.createElement("option")
    //     newOption.value = pair1[0]
    //     newOption.innerHTML = pair1[1]
    //     s3.options.add(newOption)
    // }

}

    