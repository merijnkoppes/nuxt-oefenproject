<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <nav>
    <div id="row1" class="row">
      <div id="section1">
        <ul>
          <li :class="{ active: $route.path === '/' }">
            <NuxtLink to="#">Dashboard</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/projects' }">
            <NuxtLink to="#">Projects</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/chat' }">
            <NuxtLink to="#">Chat</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/page14' }">
            <NuxtLink to="#">Schedules</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/templates' }">
            <NuxtLink to="#">
              <Icon icon="mdi:recycle-variant" width="20" />Templates
            </NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/tasks' }">
            <NuxtLink to="#">
              Tasks<Icon icon="mdi:clipboard-check" width="24" /><Icon
                icon="mdi:alarm-clock"
                width="24"
              />
            </NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/hours' }">
            <NuxtLink to="#">Hours</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/forms' }">
            <NuxtLink to="#">Forms</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/documents' }">
            <NuxtLink to="#">Documents</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/reports' }">
            <NuxtLink to="#">Reports</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/rpa' }">
            <NuxtLink to="#" class="geletekst">RPA</NuxtLink>
          </li>
        </ul>
      </div>
      <div id="section2">
        <ul>
          <li>
            <Icon icon="mdi:lightbulb" width="24" />
          </li>
          <li>
            <Icon icon="mdi:people" class="geletekst" width="24" />
          </li>
          <li>
            <Icon icon="mdi:factory" width="24" />
          </li>
          <li>
            <Icon icon="mdi:account-hard-hat" width="24" />
          </li>
        </ul>
      </div>
    </div>
    <div id="row2" class="row">
      <div id="section1">
        <ul>
          <li>
            <v-btn class="custom-create-task">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                />
              </svg>
              CREATE TASK
            </v-btn>
          </li>
          <li>
            <v-btn class="custom-create-task">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                />
              </svg>
              CREATE TEMPLATE TASK
            </v-btn>
          </li>
        </ul>
      </div>
      <div id="section2">
        <ul>
          <li>
            <v-btn class="custom-create-task">EXPORT</v-btn>
          </li>
          <li>
            <div class="search-container">
              <input type="text" placeholder="Search" class="custom-input" />
              <span class="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 2a7 7 0 0 1 5.5 11.5l5 5l-1.5 1.5l-5-5A7 7 0 1 1 9 2m0 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10"
                  />
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.row {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  & * {
    display: flex;
  }
  /* outline-style: solid; */
}
#row1 {
  padding: 0 75px;
  display: flex;
  justify-content: space-between;
  background-color: #000;
  & #section1 {
    & ul {
      height: 100%;
      width: fit-content;

      & li {
        height: 100%;
        font-weight: 800;
        border-left: 1px rgba(255, 255, 255, 0.3) solid;
        border-right: 1px rgba(255, 255, 255, 0.3) solid;
        align-items: center; /* Vertical centering */
        justify-content: center; /* Horizontal centering */
        padding: 15px 16px;
        font-size: 14.5px;
      }
      li.active {
        background-color: #ccc; /* Highlight active li */
        color: #000;
      }
    }
  }
  & #section2 {
    & ul {
      height: 100%;
      width: fit-content;

      & li {
        height: 100%;
        font-weight: 800;
        border-left: 1px rgba(255, 255, 255, 0.3) solid;
        border-right: 1px rgba(255, 255, 255, 0.3) solid;
        align-items: center; /* Vertical centering */
        justify-content: center; /* Horizontal centering */
        padding: 15px 16px;
        font-size: 14.5px;
      }
    }
  }
}

#row2 {
  background-color: #ccc;

  padding: 0 75px;
  display: flex;
  justify-content: space-between;

  & #section1 {
    & ul {
      height: 100%;
      width: fit-content;

      & li {
        height: 100%;
        font-weight: 800;
        align-items: center; /* Vertical centering */
        justify-content: center; /* Horizontal centering */
        padding: 15px 16px;
        font-size: 14.5px;
      }
      li.active {
        background-color: #ccc; /* Highlight active li */
        color: #000;
      }
    }
  }
  & #section2 {
    & ul {
      height: 100%;
      width: fit-content;

      & li {
        height: 100%;
        font-weight: 800;
        align-items: center; /* Vertical centering */
        justify-content: center; /* Horizontal centering */
        padding: 15px 16px;
        font-size: 14.5px;
      }
    }
  }
}
.geletekst {
  color: rgb(237, 181, 26);
}
.custom-create-task {
  background-color: rgb(98, 187, 70); /* Green background */
  color: rgb(255, 255, 255); /* White text */
  font-family: "proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.07143px;
  line-height: 18px;
  height: 34px;
  padding: 0 18px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
}

.custom-create-task:hover {
  background-color: rgb(88, 167, 60); /* Slightly darker on hover */
}
.search-container {
  display: flex;
  align-items: center;
  position: relative;
  max-width: 205px;
  padding: 4px;
}

.custom-input {
  font-family: "proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgb(98, 187, 70);
  caret-color: rgb(98, 187, 70);
  height: 40px;
  max-width: 205px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0px; /* No border radius */
  padding: 0px 35px 0px 10px; /* Space for the icon */
  box-sizing: border-box;
  text-align: left;
  letter-spacing: normal;
  line-height: 24px;
  margin: 0;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  unicode-bidi: isolate;
  word-spacing: 0.8px;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: white;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.5);
}
</style>
