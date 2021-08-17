import React from "react";

import Button from "@material-ui/core/Button";

export default function SearchPage() {
  return (
    <>
      <Button onClick={() => window.location.assign("/SearchArtist")}>
        Search Events By Area!
      </Button>
    </>
  );
}
