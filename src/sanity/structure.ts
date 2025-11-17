import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) => {
  console.log(context.currentUser);
  return S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("work").title("Work"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "work"].includes(item.getId()!)
      ),
    ]);
};
