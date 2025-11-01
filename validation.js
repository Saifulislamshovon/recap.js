function validateCode(code, attempts, userType) {
  const validUserTypes = ["student", "admin", "teacher"];

  
  if (!validUserTypes.includes(userType)) {
    return "This type of user can't get access to this site";
  }

 
  else if (code !== "1234" && attempts >= 5) {
    return "Max Limit Reached: ACCOUNT LOCKED";
  }

  
  else if (code !== "1234" && attempts > 0) {
    return "Try again, attempts left: " + (5 - attempts);
  }

  
  else if (userType === "admin" && code === "1234") {
    return "Admin Override: Full Access";
  }

  
  else if (userType === "student" && code === "1234") {
    return "Partial Access Granted";
  }

  
  else if (userType === "teacher" && code === "1234") {
    return "Full Access Granted";
  }


  else {
    return "Invalid code or access denied";
  }
}

console.log(validateCode("1234", 1, "student"));
