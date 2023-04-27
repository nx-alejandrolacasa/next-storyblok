import { getPathsFromLinks } from './storyblok'

describe('getPathsFromLinks', () => {
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
    const locales = ['en', 'de']
    const expected = [
      { params: { slug: ['pages', 'foo'] }, locale: 'en' },
      { params: { slug: ['pages', 'foo'] }, locale: 'de' },
      { params: { slug: ['pages', 'bar'] }, locale: 'en' },
      { params: { slug: ['pages', 'bar'] }, locale: 'de' },
    ]

    // @ts-ignore
    expect(getPathsFromLinks(links, locales)).toEqual(expected)
  })

  it('should not return paths with the slug "home"', () => {
    const links = {
      '1234': {
        is_folder: false,
        published: true,
        slug: 'pages/foo',
      },
      '5678': {
        is_folder: false,
        published: true,
        slug: 'home',
      },
    }
    const locales = ['en', 'de']
    const expected = [
      { params: { slug: ['pages', 'foo'] }, locale: 'en' },
      { params: { slug: ['pages', 'foo'] }, locale: 'de' },
    ]

    // @ts-ignore
    expect(getPathsFromLinks(links, locales)).toEqual(expected)
  })

  it('should not return paths with is_folder set to true', () => {
    const links = {
      '1234': {
        is_folder: false,
        published: true,
        slug: 'pages/foo',
      },
      '5678': {
        is_folder: true,
        published: true,
        slug: 'pages/bar',
      },
    }
    const locales = ['en', 'de']
    const expected = [
      { params: { slug: ['pages', 'foo'] }, locale: 'en' },
      { params: { slug: ['pages', 'foo'] }, locale: 'de' },
    ]

    // @ts-ignore
    expect(getPathsFromLinks(links, locales)).toEqual(expected)
  })

  it('should not return paths not published', () => {
    const links = {
      '1234': {
        is_folder: false,
        published: true,
        slug: 'pages/foo',
      },
      '5678': {
        is_folder: false,
        published: false,
        slug: 'pages/bar',
      },
    }
    const locales = ['en', 'de']
    const expected = [
      { params: { slug: ['pages', 'foo'] }, locale: 'en' },
      { params: { slug: ['pages', 'foo'] }, locale: 'de' },
    ]

    // @ts-ignore
    expect(getPathsFromLinks(links, locales)).toEqual(expected)
  })
})
