import React from 'react'

interface TechBadgeProps {
  name: string
  className?: string
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = "" }) => {
  return (
    <span 
      className={`px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-400 text-xs font-semibold hover:border-emerald-500/20 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200 ${className}`}
    >
      {name}
    </span>
  )
}

export default TechBadge
