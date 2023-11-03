import { useContext } from "react";
import { TreeViewItem } from "./TreeItem";
import { SelectedItemsContext } from "./SelectedItemsContext";

export function useIsSelectedItem(item: TreeViewItem<any>) {
  const selectedItems = useContext(SelectedItemsContext);
  return selectedItems.find((i) => i.id === item.id) !== undefined;
}
