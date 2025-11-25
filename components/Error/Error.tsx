type ErrorProps = {
  statusCode: number
}

export function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 sm:px-6">
      <h1 className="pb-10">{statusCode} error</h1>
      <p>
        Ut magna commodo enim enim incididunt consequat magna fugiat irure esse
        duis sint deserunt. Reprehenderit anim consectetur ipsum dolor ex
        incididunt pariatur ullamco non.
      </p>
    </div>
  )
}
