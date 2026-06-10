import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-obsidian group-[.toaster]:border group-[.toaster]:rounded-none",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:border group-[.toast]:border-obsidian group-[.toast]:bg-transparent group-[.toast]:text-obsidian",
          cancelButton:
            "group-[.toast]:border group-[.toast]:border-obsidian group-[.toast]:bg-transparent group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
