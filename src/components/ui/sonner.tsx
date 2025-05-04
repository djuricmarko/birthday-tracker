"use client"

import type { CSSProperties, ReactNode } from 'react';
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

interface ExtendedToasterProps extends ToasterProps {
  children?: ReactNode;
}

const Toaster = ({ children, ...props }: ExtendedToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <div>
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        style={
          {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
          } as CSSProperties
        }
        {...props}
      />
      {children}
    </div>
  )
}

export { Toaster }
