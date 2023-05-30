function calculateNetSalary() {
    var grossPay = parseFloat(document.getElementById("gross-pay").value);
    var leaveDays = parseInt(document.getElementById("leave-days").value);
  
    
    var totalDays = (30 - leaveDays);
    
    var netSalary = (grossPay / 30 ) * totalDays;
  
    
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Net Salary: " + netSalary.toFixed(2);
  }