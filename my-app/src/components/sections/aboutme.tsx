export function AboutMe({ className = '', ...props }) {
  return (
    <section
      className={`flex w-full flex-col items-start font-mono ${className}`}
    >
      <h2 className="pb-5 font-sans text-3xl">About Me</h2>
      <p className="text-neutral-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi unde
        corporis non, sit tenetur! Eligendi omnis nulla rem quasi. Cumque
        voluptatem error excepturi obcaecati iusto! In consequuntur labore sit.
      </p>
    </section>
  )
}
