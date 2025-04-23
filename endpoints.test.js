const axios = require("axios")
const loginPage = new URL("http://localhost:8080/login")
const indexPage = new URL("http://localhost:8080/index")
const bookingEndpoint = new URL("http://localhost:8080/booking")

const mockData = {}
describe ("Testing login page endpoint", () => {
  test("Expect status code to be 200", async () => {
    const response = await axios.get(loginPage)

    expect(response.status).toBe(200);
  })
})

describe ("Testing index page", () => {
  test("Expect status code to be 200", async () => {
    const response = await axios.get(indexPage)

    expect(response.status).toBe(200)
  })
})

describe("Testing login route with empty mockData", () => {
  test("Expect server to respond with status code of 400", async () => {
    try {
    const response = await axios.post(loginPage, {
      mockData
    })
    } catch(err) {
      expect(err.response.status).toBe(400) 
      expect(err.response.data.message).toBe("Invalid fields")
      // console.log(err.response.data.message)
    }
  })
})


describe("Testing login route with non existing user", () => {
  test("Expect server to respond with status code of 400", async () => {
    try {
    const response = await axios.post(loginPage, {
      email: "ramenshop@gmail.com",
      password: "irukaSensei9000"
    })
    } catch(err) {
      expect(err.response.data.message).toBe("User not found")
      expect(err.response.status).toBe(400) 
    }
  })
})


describe("Testing login with valid user and incorrect password", () => {
  test("Expect server to respond with status code of 401", async () => {
    try {
    const response = await axios.post(loginPage, {
      email: "yvestumor@gmail.com",
      password: "irukaSensei9000"
    })
    } catch(err) {
      expect(err.response.status).toBe(401) 
      expect(err.response.data.message).toBe("Invalid Credentials")
    }
  })
})



describe("Testing login with valid email and  password", () => {
  test("Expect server to respond with status code of 200", async () => {
    const response = await axios.post(loginPage, {
      email: "yvestumor@gmail.com",
      password: "limerence"
    })

    expect(response.status).toBe(200)
    expect(response.headers["content-type"]).toMatch(/text\/html/);

  })
})


const bookingData = {
  firstName: "Sasuke",
  lastName: "Uchiha",
  email: "palmerscocoabutter@yahoo.com",

  address: "Konoha Village: Hidden in the leaves",
  postcode: "WE7 9KE",
  bookingType: "Consultation",

  date: "July 23rd, 2025",
  time: "10:30am",
  password: "mangekyouSharigan",

}

const sendBooking = JSON.stringify(bookingData)
// describe("Testing the booking endpoint with valid data", () => {
//   test("Expect server to respond with status code of 200", async () => {
//     const response = await axios.post(bookingEndpoint, {
//
//     firstName: "Kakashi",
//     lastName: "Hatake",
//     email: "kakashiaurafarmer@yahoo.com",
//
//     address: "Konoha Village: Hidden in the leaves",
//     postcode: "WE7 9KE",
//     bookingType: "Consultation",
//
//     date: "2025-04-02",
//     time: "10:30",
//     password: "mangekyouSharigan",
//
//     })
//
//     expect(response.status).toBe(200)
//     expect(response.data.message).toBe("Booking saved successfully")
//   })
// })
//
//
describe ("Testing login with new user created", () => {
  test("Expect the database to have saved the user", async () => {
    try {
    const response = await axios.post(loginPage, {
      email: "kakashiaurafarmer@yahoo.com",
      password: "mangekyouSharigan"
    })
    
  } catch (err) {
      expect(err.response.status).toBe(401)
      expect(err.response.data.message).toBe("Invalid Credentials")
  }
  })
})
