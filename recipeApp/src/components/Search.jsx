import React, { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name=""
        id=""
      />
    </div>
  );
}
