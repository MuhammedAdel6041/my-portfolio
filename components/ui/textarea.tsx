import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[var(--color-Border)] placeholder:text-muted-foreground focus-visible:border-[var(--color-Accent)] focus-visible:ring-[var(--color-Accent)]/50 aria-invalid:ring-[var(--color-Accent)]/20 dark:aria-invalid:ring-[var(--color-Accent)]/40 aria-invalid:border-[var(--color-Accent)] dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-[var(--color-CardBg)] px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
