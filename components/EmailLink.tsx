"use client";

import { useEffect, useState } from "react";

export default function EmailLink() {
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    setEmail(["hello", "risingblox.com"].join("@"));
  }, []);

  if (!email) {
    return <span>Email us</span>;
  }

  return <a href={`mailto:${email}`}>{email}</a>;
}
