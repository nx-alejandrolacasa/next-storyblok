type ErrorProps = {
  statusCode: number
}

export function Error({ statusCode }: ErrorProps) {
  return (
    <div className="mx-auto mb-8 px-8 lg:container">
      <h1 className="pb-10">{statusCode} error</h1>
      <p>
        Ut magna commodo enim enim incididunt consequat magna fugiat irure esse
        duis sint deserunt. Reprehenderit anim consectetur ipsum dolor ex
        incididunt pariatur ullamco non.
      </p>
    </div>
  )
}
