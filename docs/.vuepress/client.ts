import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import { setupBlogPages, setupDarkMode, setupDynamicStyle, setupSidebarItems, setupTagMap } from "./theme/composables";
import {
  CoGit,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine,
  BiSearch,
  BiPersonWorkspace,
  MdInterestsTwotone,
} from "oh-vue-icons/icons";

addIcons(
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  BiSearch,
  BiPersonWorkspace,
  MdInterestsTwotone
);

import "./styles/index.scss";

export default defineClientConfig({
  setup() {
    setupDynamicStyle();
    setupDarkMode();
    setupSidebarItems();
    setupBlogPages();
    setupTagMap();
  },
});
