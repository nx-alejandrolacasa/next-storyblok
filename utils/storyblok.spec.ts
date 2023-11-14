import { getParamsFromLinks } from './storyblok'

describe('getParamsFromLinks', () => {
  it('should return an array of paths', () => {
    const links = {
      '1234': {
        is_folder: false,
        published: true,
        slug: 'pages/foo',
      },
      '5678': {
        is_folder: false,
        published: true,
        slug: 'pages/bar',
      },
    }
    const expected = [{ slug: ['pages', 'foo'] }, { slug: ['pages', 'bar'] }]

    // @ts-ignore
    expect(getParamsFromLinks(links)).toEqual(expected)
  })
})
