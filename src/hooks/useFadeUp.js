import { useEffect, useRef } from 'react'

export default function useFadeUp() {
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.fade-up')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}
