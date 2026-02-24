"use client";

import { useState } from "react";

export function ProfilePhoto({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={className}>
      {!failed && (
        <img
          src="/aishwarya-photo.jpg"
          alt="Aishwarya"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg text-muted-foreground/30">
            Photo
          </span>
        </div>
      )}
    </div>
  );
}
