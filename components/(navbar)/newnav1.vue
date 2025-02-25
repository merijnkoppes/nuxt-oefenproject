<script setup>
import { Icon } from "@iconify/vue";
const activePage = ref("dashboard");
const setActivePage = (page) => {
  activePage.value = page;
};
</script>
<template>
  <nav>
    <div id="row1" class="row">
      <div id="section1">
        <ul>
          <li
            :class="{ active: activePage === '/' }"
            @click="setActivePage('/')"
          >
            <NuxtLink to="#">
              <p>Dashboard</p>
              <Icon icon="mdi:view-dashboard" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/projects' }"
            @click="setActivePage('/projects')"
          >
            <NuxtLink to="#">
              <p>Projects</p>
              <Icon icon="mdi:folder" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/chat' }"
            @click="setActivePage('/chat')"
          >
            <NuxtLink to="#">
              <p>Chat</p>
              <Icon icon="mdi:message-text" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/page14' }"
            @click="setActivePage('/page14')"
          >
            <NuxtLink to="#">
              <p>Schedules</p>
              <Icon icon="mdi:calendar-clock" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/templates' }"
            @click="setActivePage('/templates')"
          >
            <NuxtLink to="#">
              <p>Templates</p>
              <Icon icon="mdi:recycle-variant" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/tasks' }"
            @click="setActivePage('/tasks')"
          >
            <NuxtLink to="#">
              <p>Tasks</p>
              <Icon icon="mdi:clipboard-check" width="20" class="navicon" />
              <Icon icon="mdi:alarm-clock" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/hours' }"
            @click="setActivePage('/hours')"
          >
            <NuxtLink to="#">
              <p>Hours</p>
              <Icon
                icon="mdi:clock-time-eight-outline"
                width="20"
                class="navicon"
              />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/forms' }"
            @click="setActivePage('/forms')"
          >
            <NuxtLink to="#">
              <p>Forms</p>
              <Icon icon="mdi:form-select" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/documents' }"
            @click="setActivePage('/documents')"
          >
            <NuxtLink to="#">
              <p>Documents</p>
              <Icon icon="mdi:file-document" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/reports' }"
            @click="setActivePage('/reports')"
          >
            <NuxtLink to="#">
              <p>Reports</p>
              <Icon icon="mdi:chart-bar" width="20" class="navicon" />
            </NuxtLink>
          </li>
          <li
            :class="{ active: activePage === '/rpa' }"
            @click="setActivePage('/rpa')"
          >
            <NuxtLink to="#" class="geletekst">
              <p>RPA</p>
              <Icon icon="mdi:robot" width="20" class="navicon" />
            </NuxtLink>
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
    & .navicon {
      margin-left: 5px;
    }
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
        & * {
          background-color: #ccc; /* Highlight active li */
          color: #000;
        }
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
  color: rgba(0, 0, 0, 0);
}

@media screen and (max-width: 1650px) {
  #row1 {
    padding: 0;
    & #section1 {
      margin-left: auto;
    }
    & #section2 {
      margin-right: auto;
    }
  }
}
.burger-icon {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 15px;
}

@media screen and (max-width: 1500px) {
  #section1 ul {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: #000;
    width: 200px;
    z-index: 1000;
  }
  #section1.burger-menu ul {
    display: flex;
  }
}
</style>
