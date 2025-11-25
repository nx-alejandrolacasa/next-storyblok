import type { StoryblokMultilink } from '@/types/sb-types'
import { getHrefFromLink } from '@/utils/links'

describe('getHrefFromLink', () => {
  describe('with resolved links (resolve_links=url)', () => {
    it('should prioritize story.url when available (StoryblokMultilinkUrl)', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: 'https://example.com',
        cached_url: '/old/cached/path',
        linktype: 'story',
        story: {
          name: 'Test Story',
          id: 456,
          uuid: 'uuid-123',
          slug: 'test-story',
          url: 'https://example.com/fresh/url',
          full_slug: 'en/fresh/full-slug',
        },
      }

      expect(getHrefFromLink(link)).toEqual('https://example.com/fresh/url')
    })
  })

  describe('with resolved links (resolve_links=story)', () => {
    it('should use story.full_slug when story.url is not available (StoryblokMultilinkStory)', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: '/old/cached/path',
        linktype: 'story',
        story: {
          name: 'Test Story',
          created_at: '2024-01-01',
          published_at: '2024-01-01',
          id: 456,
          uuid: 'uuid-123',
          content: {},
          slug: 'test-story',
          full_slug: 'en/fresh/full-slug',
        },
      }

      expect(getHrefFromLink(link)).toEqual('en/fresh/full-slug')
    })
  })

  describe('with cached data (no resolve_links)', () => {
    it('should fallback to cached_url when story is not resolved', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: '/cached/path',
        linktype: 'story',
      }

      expect(getHrefFromLink(link)).toEqual('/cached/path')
    })

    it('should use cached_url for external URL links', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: 'https://external.com',
        cached_url: 'https://external.com',
        linktype: 'url',
      }

      expect(getHrefFromLink(link)).toEqual('https://external.com')
    })
  })

  describe('with StoryblokMultilinkLink (folder links)', () => {
    it('should fallback to cached_url when story is a link type without url or full_slug', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: '/folder/path',
        linktype: 'story',
        story: {
          id: 456,
          uuid: 'uuid-123',
          slug: 'folder',
          path: '/folder',
          parent_id: 0,
          name: 'Folder',
          is_folder: true,
          published: true,
          is_startpage: false,
          position: 0,
          real_path: '/folder',
        },
      }

      expect(getHrefFromLink(link)).toEqual('/folder/path')
    })
  })

  describe('edge cases', () => {
    it('should fallback to url field when cached_url is empty', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: 'https://fallback.com',
        cached_url: '',
        linktype: 'url',
      }

      expect(getHrefFromLink(link)).toEqual('https://fallback.com')
    })

    it('should return # when all values are empty or undefined', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: '',
        linktype: 'story',
      }

      expect(getHrefFromLink(link)).toEqual('#')
    })

    it('should handle email links using cached_url', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: 'mailto:test@example.com',
        linktype: 'email',
        email: 'test@example.com',
      }

      expect(getHrefFromLink(link)).toEqual('mailto:test@example.com')
    })

    it('should handle asset links using cached_url', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: 'https://a.storyblok.com/f/123/file.pdf',
        linktype: 'asset',
      }

      expect(getHrefFromLink(link)).toEqual(
        'https://a.storyblok.com/f/123/file.pdf'
      )
    })
  })

  describe('priority order', () => {
    it('should prioritize story.url over story.full_slug', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: '/cached',
        linktype: 'story',
        story: {
          name: 'Test',
          id: 456,
          uuid: 'uuid-123',
          slug: 'test',
          url: 'https://fresh-url.com',
          full_slug: 'en/full-slug',
        },
      }

      expect(getHrefFromLink(link)).toEqual('https://fresh-url.com')
    })

    it('should prioritize story.full_slug over cached_url', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: '',
        cached_url: '/old/cached',
        linktype: 'story',
        story: {
          name: 'Test',
          created_at: '2024-01-01',
          published_at: '2024-01-01',
          id: 456,
          uuid: 'uuid-123',
          content: {},
          slug: 'test',
          full_slug: 'en/fresh/full-slug',
        },
      }

      expect(getHrefFromLink(link)).toEqual('en/fresh/full-slug')
    })

    it('should prioritize cached_url over url field', () => {
      const link: StoryblokMultilink = {
        fieldtype: 'multilink',
        id: '123',
        url: 'https://url-field.com',
        cached_url: 'https://cached-url.com',
        linktype: 'url',
      }

      expect(getHrefFromLink(link)).toEqual('https://cached-url.com')
    })
  })
})
