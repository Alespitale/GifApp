import {getGifs} from '../../helpers/getGifs'

describe('Test of getGifs', () => {
    test('Should return an array of gifs', async () => {
        const gifs = await getGifs('Dragon Ball')
        
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
});
