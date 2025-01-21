// lib/utils.ts
import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn() {
  return twMerge(clsx(inputs))
}
