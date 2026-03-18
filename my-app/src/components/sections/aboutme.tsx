export function AboutMe({ className = '', ...props }) {
  return (
    <section
      className={`flex w-full flex-col items-start font-mono ${className}`}
    >
      <h2 className="font-sans text-2xl">About Me</h2>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi unde
        corporis non, sit tenetur! Eligendi omnis nulla rem quasi. Cumque
        voluptatem error excepturi obcaecati iusto! In consequuntur labore sit.
      </p>
    </section>
  )
}
