import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { IconX } from "../Icons";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ className, children, ...props }) =>
  React.createElement(
    DialogPrimitive.Portal,
    { className: cn(className), ...props },
    React.createElement(
      "div",
      {
        className:
          "fixed inset-0 z-50 flex items-start justify-center sm:items-center",
      },
      children
    )
  );
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement(DialogPrimitive.Overlay, {
    ref: ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      className
    ),
    ...props,
  })
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) =>
    React.createElement(
      DialogPortal,
      null,
      React.createElement(DialogOverlay, null),
      React.createElement(
        DialogPrimitive.Content,
        {
          ref: ref,
          className: cn(
            "fixed z-50 grid w-full gap-4 rounded-b-lg border shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
            className
          ),
          ...props,
        },
        children,
        React.createElement(
          DialogPrimitive.Close,
          {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
          },
          React.createElement(IconX, { className: "h-4 w-4" }),
          // React.createElement(X, { className: "h-4 w-4" }),
          React.createElement("span", { className: "sr-only" }, "Close")
        )
      )
    )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) =>
  React.createElement("div", {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props,
  });
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }) =>
  React.createElement("div", {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props,
  });
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement(DialogPrimitive.Title, {
    ref: ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props,
  })
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement(DialogPrimitive.Description, {
    ref: ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  })
);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
