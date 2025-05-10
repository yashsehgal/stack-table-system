import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface ResponsiveAutoAdaptProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ResponsiveAutoAdapt = forwardRef<HTMLDivElement, ResponsiveAutoAdaptProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('Responsive-auto-adapt p-4 max-md:p-2', className)} {...props} />
})
