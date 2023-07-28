import { useEffect } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / Movie Gyaaan`;
  });
  return null;
};
