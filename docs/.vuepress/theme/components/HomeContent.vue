<template>
  <div class="home-content">
    <div class="left-part">
      <ArticleList :data="allListFilterByYear(alllist)" :scrollTopDistance="-57" />
    </div>
    <div class="right-part">
      <div class="person-panel">
        <div class="person-info">
          <img :src="withBase(personalInfo.avatar)" alt="hero" @mouseover="fetchHitokoto" />
          <h1>{{ personalInfo.name }}</h1>
        </div>
        <div class="panel-data">
          <ul>
            <li>
              <p>Posts</p>
              <span>{{ page.listsNum }}</span>
            </li>
            <li>
              <p>Notes</p>
              <span>{{ page.notesNum }}</span>
            </li>
            <li>
              <p>Categories</p>
              <span>{{ page.catesNum }}</span>
            </li>
          </ul>
          <div class="panel-today">
            <div class="date-year">
              <VIcon name="ri-book-2-fill" />
              {{ new Date().getFullYear() }}
            </div>
            <p>
              <b>{{ new Date().getMonth() + 1 }}</b> / {{ new Date().getDate() }}
            </p>
            <div class="date-week">
              <i class="v-icon">
                <VIcon v-if="new Date().getDay() > 5" name="dd-interests-twotone" />
                <VIcon v-if="new Date().getDay() <= 5" name="bi-person-workspace" />
              </i>
              <span>{{ getWeek(new Date().getDay()) }}</span>
            </div>
          </div>
        </div>
        <div class="panel-content">
          <ul>
            <li v-for="(navItem, navIndex) in navbar.navbar" :key="navIndex">
              <RouterLink :to="navItem.link">
                <VIcon :name="navItem.icon" />
                <span>{{ navItem.text }}</span>
              </RouterLink>
            </li>
          </ul>
          <div></div>
        </div>
        <p class="person-desc">{{ personalInfo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from "vue";
  import ArticleList from "../components/ArticleList.vue";
  import type { PersonalConfig, HomePageData } from "../shared";
  import { useThemeLocaleData } from "../composables";
  import { allListFilterByYear } from "../utils";
  import { navbar } from "../../config/index";
  import { withBase } from "@vuepress/client";
  import { usePageData } from "@vuepress/client";

  // person info
  const themeLocale = useThemeLocaleData();
  const personalInfo = themeLocale.value.personalInfo as PersonalConfig;

  // all the article list
  const page = usePageData<HomePageData>();
  console.log(page.value);
  const alllist = ref(page.value.lists || []);
  // console.log(alllist.value);
  // console.log(page.value);

  // get weather
  let weatherUrl = "http://www.weather.com.cn/data/cityinfo/101280106";

  // get Date week
  const getWeek = (weekNum: number) => {
    let weekStr = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    let weekMap = new Map();
    for (let i = 0; i < 7; i++) {
      weekMap.set(i + 1, weekStr[i]);
    }
    return weekMap.get(weekNum);
  };
</script>

<style lang="scss" scoped>
  .home-content {
    display: flex;
    margin: 0 auto;
    width: 1080px;

    .right-part {
      position: relative;
      width: 300px;
      height: auto;

      .person-panel {
        position: sticky;
        top: 25px;
        margin: 75px 0 20px;
        width: 276px;
        background: #fafafa;
        border-radius: 6px;
        box-shadow: 0 2px 8px 0 rgba(27, 35, 47, 0.25);

        .person-info {
          img {
            margin: 0 0 10px;
            width: 164px;
            border-radius: 6px 0 50% 0;
            box-shadow: 0 2px 8px 0 rgba(27, 35, 47, 0.25);
          }

          h1 {
            margin: -5px 0 0;
            padding: 0 24px 4px 0;
            text-align: right;
            color: #333333;
            font-size: 24px;
            font-family: "Segoe Print";
            border-bottom: 3px solid #cbcbcb;
          }
        }

        .panel-data {
          display: flex;

          ul {
            margin: 0;
            padding: 0;
            width: 50%;
            list-style: none;

            li {
              position: relative;
              display: inline-block;
              margin: 6px 0 0 0;
              padding: 2px 30px 2px 10px;
              font-family: "Segoe Script";
              border-radius: 12% 0 24% 0;
              border-right: 2px solid #fafafa;
              background: var(--c-brand);
              transition: all ease 0.3s;
              -webkit-transition: all ease 0.3s;

              &:hover {
                transform: scaleX(1.1);
                transform-origin: 0 50%;
                cursor: pointer;
              }

              p {
                margin: 0;
                text-align: center;
                color: #fff;
                font-size: 14px;
                // background: var(--c-brand);
              }

              span {
                position: absolute;
                margin: 0;
                top: 0;
                right: 8px;
                color: #fff;
                font-size: 13px;
                letter-spacing: -1px;
              }
            }
          }

          .panel-today {
            width: 50%;
            height: 108px;
            font-family: "Segoe Script";
            background: #fff;
            border-radius: 0 0 4px 4px;
            box-shadow: 0 2px 2px 0 rgba(27, 35, 47, 0.25);
            cursor: default;

            .date-year {
              margin: 0;
              padding: 2px 0;
              color: #fff;
              text-align: center;
              background: var(--c-brand);
            }

            p {
              margin: 0;
              color: #404040;
              text-align: center;
              font-size: 20px;
              font-family: "Arvo";
              font-style: italic;

              b {
                font-size: 36px;
                font-weight: normal;
              }
            }

            .date-week {
              display: flex;
              justify-content: space-between;
              width: 100%;
              margin: -6px 0 0;
              text-align: right;

              span {
                margin-right: 6px;
                color: var(--c-brand);
                font-size: 15px;
              }

              .v-icon {
                margin-left: 6px;
                color: #e33b2e;
              }
            }
          }
        }

        .panel-content {
          display: flex;

          ul {
            padding-left: 10px;
            width: calc(50% - 10px);
            list-style: none;

            li {
              transition: all ease 0.3s;
              -webkit-transition: all ease 0.3s;

              &:hover {
                transform: scale(1.15);
                transform-origin: 0 50%;
              }

              &:hover span {
                font-weight: bold;
              }
            }

            span {
              margin-left: 5px;
              color: #404040;
              font-size: 15px;
              font-family: "Segoe Script";
            }
          }
        }

        .person-desc {
          margin: 0;
          text-align: center;
          color: #ffffff;
          font-family: "Segoe Script";
          background: var(--c-brand);
          border-radius: 0 0 6px 6px;
        }
      }
    }

    .left-part {
      margin-right: 150px;
    }
  }
</style>
