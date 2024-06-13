export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* <nav className="bg-blue-500">bbb</nav> */}
        {children}
        <h2>Docs features</h2>
      </section>
    )
  }