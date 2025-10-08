const request = require('supertest');
const {app,server } = require('../app')

describe('GET /', () => {
    it("should return 200 status  and the correct  message", async() => {
        const responce = await request(app).get("/");
        expect(responce.status).toBe(200);
        expect(responce.text).toBe("Welcome to ShopEasy ! From App.js");
    })
})
