import { Link } from 'react-router-dom'

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      <div className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <span>{breadcrumb || title}</span>
      </div>
    </section>
  )
}
