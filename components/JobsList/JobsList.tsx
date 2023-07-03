import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
import { JobsListStoryblok } from '@/types/sb-types'
import { storyblokEditable } from '@storyblok/react'
import { RichText } from '@/components/RichText/RichText'
import { Job } from '@/types/api-types'
import Link from 'next/link'

type JobsListProps = { blok: JobsListStoryblok }

export function JobsList({ blok }: JobsListProps) {
  const { data, error, isLoading } = useSWR<Job[], Error>('/api/jobs', fetcher)

  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="my-5 w-full text-center text-4xl text-dark">
        {blok.headline}
      </h2>
      {blok.description && (
        <RichText
          className="text-center text-base text-dark"
          text={blok.description}
        />
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul className="grid auto-rows-fr grid-cols-1 gap-4 py-4 align-middle md:grid-cols-2 lg:grid-cols-3">
          {data?.map((job) => (
            <li
              key={job.id}
              className="flex flex-col justify-center rounded shadow-2 transition-all hover:shadow-2-hover"
            >
              <Link href="#" className="h-full w-full p-4">
                <p className="font-bold">{job.name}</p>
                <p className="text-sm">{job.department}</p>
                <p className="text-sm">{job.office}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
