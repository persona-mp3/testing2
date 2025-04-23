const emailStr = "kakashihataivnreiosicnnsidvkae@gmail.com"

const validateEmail = function (email) {
  if (!email.includes("@") && !email.includes(".com")) {
    return false
  }

  const hashMap = {}
  
  for (let i=0; i < email.length; i++) {
    hashMap[i] = email[i]
  }

    console.log(hashMap)
  

  return true
}

const isValid = validateEmail(emailStr)
console.log(isValid)
