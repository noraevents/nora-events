"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-terracotta text-ivoire hover:bg-terracotta-light active:scale-[0.98]",
        secondary:
          "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-ivoire",
        ghost:
          "text-terracotta hover:bg-terracotta/10",
        sauge:
          "bg-sauge text-ivoire hover:bg-sauge-light",
        white:
          "bg-ivoire !text-anthracite hover:bg-beige border border-beige",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-[4px]",
        md: "px-6 py-3 text-base rounded-[4px]",
        lg: "px-8 py-4 text-lg rounded-[4px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps & { href: string; target?: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, target, ...rest } = props;
    return (
      <Link href={href} target={target} className={classes} {...(rest as object)}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
