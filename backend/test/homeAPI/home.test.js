import app from '../../server'
import request from 'supertest'

describe('My first test', () => { 
    it('should run', async () => {
        const res = await request(app)
                    .get('/api')
                    .expect(200)
        expect(res.body).toEqual(expect.stringContaining("Hello world!"))
    })

    // it('should run', () => {
    //     return request(app)
    //             .get('/api')
    //             .expect(200)
    //             .expect(res.body).toEqual(expect.stringContaining("Hello world!"))
    // })

    it('should not run', () => {
        return request(app)
                .get('/something')
                .expect(404)
    })
    
})