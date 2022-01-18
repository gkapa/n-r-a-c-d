import React from "react";

export const SidebarContext = React.createContext<{
  isSidebarOn: boolean;
  setIsSidebarOn: any;
}>({
  isSidebarOn: false,
  setIsSidebarOn: () => {}
});
