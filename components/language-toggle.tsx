"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>{t("english")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")}>{t("spanish")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>{t("french")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")}>{t("arabic")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
