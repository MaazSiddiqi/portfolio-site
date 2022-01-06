export default function MainHero( { children } ) {
  return (
    <section
      className="flex relative w-auto h-screen overflow-hidden justify-center items-center"
    >
      {children}
    </section>
  );
}
