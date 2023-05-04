import Image from 'next/image'

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="nx-gradient mx-auto">
        <figure className="mt-10">
          <blockquote className="text-center text-bold leading-8 text-gray-1 sm:leading-9">
            <p className="px-10 text-bold text-foreground">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt="Jenny Doe"
              className="mx-auto rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              height="40"
              width="40"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-regular">
              <div className="font-semibold text-gray-1">Jenny Doe</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-1"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-1">Worker of Company AG</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
